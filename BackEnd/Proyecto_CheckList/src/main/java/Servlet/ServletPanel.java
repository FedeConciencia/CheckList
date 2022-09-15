

package Servlet;


import Controlador.ControladorPanel;
import Modelo.Panel;
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


//Se especifica el nombre y ruta de la clase: 'http://localhost:8080/Proyecto_CheckList/PanelServlet?
@WebServlet(name = "PanelServlet", urlPatterns = {"/PanelServlet"})
public class ServletPanel extends HttpServlet {
    
     
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
                    
                    ControladorPanel c1 = new ControladorPanel();
                    List<Panel> listaPanel = c1.buscarAllPanel();
                    Gson gsonBuilder = new GsonBuilder().create();
                    String panelJson = gsonBuilder.toJson(listaPanel);
                    respuestaServer = panelJson;
                    
                }else if(request.getParameter("action").equals("buscar")){
                    
                    ControladorPanel c1 = new ControladorPanel();
                    Panel panel = c1.buscarOnePanel(Long.parseLong(request.getParameter("idPanel"))); 
                    Gson gsonBuilder = new GsonBuilder().create();
                    String panelJson = gsonBuilder.toJson(panel);
                    respuestaServer = panelJson;
                    
                }else if(request.getParameter("action").equals("insertar")){
                    
                    //Se completa con los datos del ControladorAbertura
                    
                    String selladores = request.getParameter("selladores");
                    String izaje = request.getParameter("izaje");
                    String tornillos = request.getParameter("tornillos");
                    String perfileria = request.getParameter("perfileria");
                    String panelesFrio = request.getParameter("panelesFrio");
                    String perfileriaFrio = request.getParameter("perfileriaFrio");
                    double espesor = Double.parseDouble(request.getParameter("espesor"));
                    String resultado = request.getParameter("resultado");
                    String comentario = request.getParameter("comentario");
                    LocalDate fechaAlta = LocalDate.parse(request.getParameter("fechaAlta"));
                    LocalDate fechaBaja = LocalDate.parse(request.getParameter("fechaAlta"));
                    String estado = request.getParameter("estado");
                    Long idVisita = Long.parseLong(request.getParameter("idVisita"));
                    
                

                    ControladorPanel c1 = new ControladorPanel();
                    Panel panel = new Panel(selladores, izaje, tornillos, perfileria, panelesFrio, perfileriaFrio, espesor, resultado, comentario, fechaAlta, fechaBaja, estado, idVisita);
                    c1.insertarPanel(panel);
                    Gson gsonBuilder = new GsonBuilder().create();
                    String panelJson = gsonBuilder.toJson(panel);
                    respuestaServer = panelJson;
                    
                }else if(request.getParameter("action").equals("actualizar")){
                    
                    
                     //Se completa con los datos del ControladorAbertura
                    
                    Long idPanel = Long.parseLong(request.getParameter("idPanel")); 
                    String selladores = request.getParameter("selladores");
                    String izaje = request.getParameter("izaje");
                    String tornillos = request.getParameter("tornillos");
                    String perfileria = request.getParameter("perfileria");
                    String panelesFrio = request.getParameter("panelesFrio");
                    String perfileriaFrio = request.getParameter("perfileriaFrio");
                    double espesor = Double.parseDouble(request.getParameter("espesor"));
                    String resultado = request.getParameter("resultado");
                    String comentario = request.getParameter("comentario");
                    LocalDate fechaAlta = LocalDate.parse(request.getParameter("fechaAlta"));
                    LocalDate fechaBaja = LocalDate.parse(request.getParameter("fechaAlta"));
                    String estado = request.getParameter("estado");
                    Long idVisita = Long.parseLong(request.getParameter("idVisita"));
                    

                    
                    ControladorPanel c1 = new ControladorPanel();
                    Panel panel = new Panel(idPanel, selladores, izaje, tornillos, perfileria, panelesFrio, perfileriaFrio, espesor, resultado, comentario, fechaAlta, fechaBaja, estado, idVisita);
                    c1.actualizarPanel(panel);
                    Gson gsonBuilder = new GsonBuilder().create();
                    String panelJson = gsonBuilder.toJson(panel);
                    respuestaServer =  panelJson;
                    
                }else if(request.getParameter("action").equals("eliminar")){
                    
                    ControladorPanel c1 = new ControladorPanel();     
                    c1.eliminarPanel(Long.parseLong(request.getParameter("idPanel")));
                    List<Panel> listaPanel = c1.buscarAllPanel();
                    Gson gsonBuilder = new GsonBuilder().create();
                    String panelJson = gsonBuilder.toJson(listaPanel);
                    respuestaServer = panelJson;
                    
                }else if(request.getParameter("action").equals("eliminarLogico")){
                    
                    Long idPanel = Long.parseLong(request.getParameter("idPanel"));
                    LocalDate fechaBaja = LocalDate.parse(request.getParameter("fechaBaja"));
                    
                    ControladorPanel c1 = new ControladorPanel();  
                    c1.eliminarLogicoPanel(idPanel, fechaBaja);
                    List<Panel> listaPanel = c1.buscarAllPanel();
                    Gson gsonBuilder = new GsonBuilder().create();
                    String panelJson = gsonBuilder.toJson(listaPanel);
                    respuestaServer = panelJson;
                    
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



