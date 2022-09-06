
package Modelo;

import java.time.LocalDate;


public class Visita {
    
    
    private Long idVisita;
    private LocalDate fecha;
    private String nombreTecnico;
    private String apellidoTecnico;
    private int nVisita;
    private LocalDate fechaAlta;
    private LocalDate fechaBaja;
    private String estado;
    private Long idGeneral;
    
    
    public Visita() {
    }
    
    public Visita(Long idVisita, LocalDate fecha, String nombreTecnico, String apellidoTecnico, int nVisita, LocalDate fechaAlta, LocalDate fechaBaja, String estado, Long idGeneral) {
        this.idVisita = idVisita;
        this.fecha = fecha;
        this.nombreTecnico = nombreTecnico;
        this.apellidoTecnico = apellidoTecnico;
        this.nVisita = nVisita;
        this.fechaAlta = fechaAlta;
        this.fechaBaja = fechaBaja;
        this.estado = estado;
        this.idGeneral = idGeneral;
    }

    public Visita(LocalDate fecha, String nombreTecnico, String apellidoTecnico, int nVisita, LocalDate fechaAlta, LocalDate fechaBaja, String estado, Long idGeneral) {
        this.fecha = fecha;
        this.nombreTecnico = nombreTecnico;
        this.apellidoTecnico = apellidoTecnico;
        this.nVisita = nVisita;
        this.fechaAlta = fechaAlta;
        this.fechaBaja = fechaBaja;
        this.estado = estado;
        this.idGeneral = idGeneral;
    }

    public Long getIdVisita() {
        return idVisita;
    }

    public void setIdVisita(Long idVisita) {
        this.idVisita = idVisita;
    }

    public LocalDate getFecha() {
        return fecha;
    }

    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }

    public String getNombreTecnico() {
        return nombreTecnico;
    }

    public void setNombreTecnico(String nombreTecnico) {
        this.nombreTecnico = nombreTecnico;
    }

    public String getApellidoTecnico() {
        return apellidoTecnico;
    }

    public void setApellidoTecnico(String apellidoTecnico) {
        this.apellidoTecnico = apellidoTecnico;
    }

    public int getnVisita() {
        return nVisita;
    }

    public void setnVisita(int nVisita) {
        this.nVisita = nVisita;
    }

    public LocalDate getFechaAlta() {
        return fechaAlta;
    }

    public void setFechaAlta(LocalDate fechaAlta) {
        this.fechaAlta = fechaAlta;
    }

    public LocalDate getFechaBaja() {
        return fechaBaja;
    }

    public void setFechaBaja(LocalDate fechaBaja) {
        this.fechaBaja = fechaBaja;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public Long getIdGeneral() {
        return idGeneral;
    }

    public void setIdGeneral(Long idGeneral) {
        this.idGeneral = idGeneral;
    }

    @Override
    public String toString() {
        return "idVisita: " + idVisita + "\nfecha: " + fecha + "\nnombreTecnico: " + nombreTecnico + "\napellidoTecnico: " + apellidoTecnico + "\nnVisita: " + nVisita + 
                "\nfechaAlta: " + fechaAlta + "\nfechaBaja: " + fechaBaja + "\nestado: " + estado + "\nidGeneral: " + idGeneral;
    }
    
    

}
