
package Servlet;



import Controlador.ControladorVisita;
import Modelo.Visita;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.commons.io.output.*;
import java.time.LocalDate;
import java.time.LocalTime;


//Se especifica el nombre y ruta de la clase: 'http://localhost:8080/Proyecto_CheckList/VisitaServlet?
@WebServlet(name = "VisitaServlet", urlPatterns = {"/VisitaServlet"})
public class ServletVisita extends HttpServlet {
    
     
    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        //Modificando el response.setContentType y agregando charset=UTF-8 soluciona problema de caracteres como ñ en react:
        //https://blog.continuum.cl/generar-una-respuesta-json-desde-java-en-utf-8-e68392ae4587
        
        response.setContentType("application/json;charset=UTF-8");
        response.setHeader("Access-Control-Allow-Origin", request.getHeader("Origin"));
        response.setHeader("Access-Control-Allow-Credentials", "true");
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
        response.setHeader("Access-Control-Max-Age", "3600");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With, remember-me");
        
        PrintWriter out = response.getWriter();
        String respuestaServer = "";
        try {
            
            mostrarElementos(request, response);
            if(request.getParameter("action") != null){
                System.out.println("ACTION " + request.getParameter("action"));
                if(request.getParameter("action").equals("listar")){
                    
                    ControladorVisita c1 = new ControladorVisita();
                    List<Visita> listaVisita = c1.buscarAllVisita();
                    Gson gsonBuilder = new GsonBuilder().create();
                    String visitaJson = gsonBuilder.toJson(listaVisita);
                    respuestaServer = visitaJson;
                    
                }else if(request.getParameter("action").equals("buscar")){
                    
                    ControladorVisita c1 = new ControladorVisita();
                    Visita visita = c1.buscarOneVisita(Long.parseLong(request.getParameter("idVisita"))); 
                    Gson gsonBuilder = new GsonBuilder().create();
                    String visitaJson = gsonBuilder.toJson(visita);
                    respuestaServer = visitaJson;
                    
                }else if(request.getParameter("action").equals("insertar")){
                    
                    //Se completa con los datos del ControladorAbertura
                    
                     
                    LocalDate fecha = LocalDate.parse(request.getParameter("fecha"));
                    String nombreTecnico = request.getParameter("nombreTecnico");
                    String apellidoTecnico = request.getParameter("apellidoTecnico");
                    int nVisita = Integer.parseInt(request.getParameter("nVisita"));
                    LocalDate fechaAlta = LocalDate.parse(request.getParameter("fechaAlta"));
                    LocalDate fechaBaja = LocalDate.parse(request.getParameter("fechaBaja"));
                    String estado = request.getParameter("estado");
                    Long idGeneral = Long.parseLong(request.getParameter("idGeneral"));
                    
                   

                    ControladorVisita c1 = new ControladorVisita();  
                    Visita visita = new Visita(fecha, nombreTecnico, apellidoTecnico, nVisita, fechaAlta, fechaBaja, estado, idGeneral);
                    c1.insertarVisita(visita);
                    Gson gsonBuilder = new GsonBuilder().create();
                    String visitaJson = gsonBuilder.toJson(visita);
                    respuestaServer = visitaJson;
                    
                }else if(request.getParameter("action").equals("actualizar")){
                    
                    
                     //Se completa con los datos del ControladorAbertura
                    
                    Long idVisita = Long.parseLong(request.getParameter("idVisita"));
                    LocalDate fecha = LocalDate.parse(request.getParameter("fecha"));
                    String nombreTecnico = request.getParameter("nombreTecnico");
                    String apellidoTecnico = request.getParameter("apellidoTecnico");
                    int nVisita = Integer.parseInt(request.getParameter("nVisita"));
                    LocalDate fechaAlta = LocalDate.parse(request.getParameter("fechaAlta"));
                    LocalDate fechaBaja = LocalDate.parse(request.getParameter("fechaBaja"));
                    String estado = request.getParameter("estado");
                    Long idGeneral = Long.parseLong(request.getParameter("idGeneral"));
                    
                   

                    ControladorVisita c1 = new ControladorVisita();  
                    Visita visita = new Visita(idVisita, fecha, nombreTecnico, apellidoTecnico, nVisita, fechaAlta, fechaBaja, estado, idGeneral);
                    c1.actualizarVisita(visita);
                    Gson gsonBuilder = new GsonBuilder().create();
                    String visitaJson = gsonBuilder.toJson(visita);
                    respuestaServer = visitaJson;
                    
                }else if(request.getParameter("action").equals("eliminar")){
                    
                    ControladorVisita c1 = new ControladorVisita();       
                    c1.eliminarVisita(Long.parseLong(request.getParameter("idVisita")));
                    List<Visita> listaVisita = c1.buscarAllVisita();
                    Gson gsonBuilder = new GsonBuilder().create();
                    String visitaJson = gsonBuilder.toJson(listaVisita);
                    respuestaServer = visitaJson;
                    
                }else if(request.getParameter("action").equals("eliminarLogico")){
                    
                    Long idVisita = Long.parseLong(request.getParameter("idVisita"));
                    LocalDate fechaBaja = LocalDate.parse(request.getParameter("fechaBaja"));
                    
                    ControladorVisita c1 = new ControladorVisita();   
                    c1.eliminarLogicoVisita(idVisita, fechaBaja);
                    List<Visita> listaVisita = c1.buscarAllVisita();
                    Gson gsonBuilder = new GsonBuilder().create();
                    String visitaJson = gsonBuilder.toJson(listaVisita);
                    respuestaServer = visitaJson;
                    
                }else if(request.getParameter("action").equals("visitaIncremental")){
                    
                    String nVisitaIncrem = request.getParameter("codigo");
                    
                    
                    ControladorVisita c1 = new ControladorVisita();   
                    int nVisita = c1.incrementarVisita(nVisitaIncrem);
                    Gson gsonBuilder = new GsonBuilder().create();
                    String visitaJson = gsonBuilder.toJson(nVisita);
                    respuestaServer = visitaJson;
                    
                }else if(request.getParameter("action").equals("ultimoId")){
                    
                    String codigo = request.getParameter("codigo");
                    
                    ControladorVisita c1 = new ControladorVisita();    
                    Long ultimoId = c1.ultimoIdVisita(codigo);
                    Gson gsonBuilder = new GsonBuilder().create();
                    String ultimoJson = gsonBuilder.toJson(ultimoId);
                    respuestaServer = ultimoJson;
                    
                }
                
                
            }
            out.write(respuestaServer);
        }catch(Exception ex){
            ex.printStackTrace();
        } finally {
            out.close();
        }
    }
    
    private void mostrarElementos(HttpServletRequest request, HttpServletResponse response) throws ServletException, java.io.IOException{
        try { 
            boolean isMultipart = ServletFileUpload.isMultipartContent(request);
            response.setContentType("text/html");
            
            if(!isMultipart ) {
                System.out.println("NO ES MULTIPART");
                return;
            }

            DiskFileItemFactory factory = new DiskFileItemFactory();
            ServletFileUpload upload = new ServletFileUpload(factory);

        
           // Parse the request to get file items.
           List fileItems = upload.parseRequest(request);

           // Process the uploaded file items
           Iterator i = fileItems.iterator();

           while ( i.hasNext () ) {
                FileItem fi = (FileItem)i.next();
                // Get the uploaded file parameters
                String fieldName = fi.getFieldName();
                String value = fi.getString();
                System.out.println("FieldName: " + fieldName);
                System.out.println("VALOR: " + value);
           }
           
           } catch(Exception ex) {
              System.out.println(ex);
           }
    }
    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>
    
}











