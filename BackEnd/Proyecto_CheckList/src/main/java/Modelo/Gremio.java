
package Modelo;

import java.time.LocalDate;
import java.time.LocalTime;


public class Gremio {
    
    private Long idGremio;
    private String nombreGremio;
    private int nroPersonas;
    private LocalTime horarioDesde;
    private LocalTime horarioHasta;
    private LocalDate fechaDesde;
    private LocalDate fechaHasta;
    private int nroArgentinos;
    private String nombreContratista;
    private String apellidoContratista;
    private LocalDate fechaAlta;
    private LocalDate fechaBaja;
    private String estado;
    private Long idPersona;

    public Gremio() {
    }

    public Gremio(Long idGremio, String nombreGremio, int nroPersonas, LocalTime horarioDesde, LocalTime horarioHasta, LocalDate fechaDesde, LocalDate fechaHasta, int nroArgentinos, String nombreContratista, String apellidoContratista, LocalDate fechaAlta, LocalDate fechaBaja, String estado, Long idPersona) {
        this.idGremio = idGremio;
        this.nombreGremio = nombreGremio;
        this.nroPersonas = nroPersonas;
        this.horarioDesde = horarioDesde;
        this.horarioHasta = horarioHasta;
        this.fechaDesde = fechaDesde;
        this.fechaHasta = fechaHasta;
        this.nroArgentinos = nroArgentinos;
        this.nombreContratista = nombreContratista;
        this.apellidoContratista = apellidoContratista;
        this.fechaAlta = fechaAlta;
        this.fechaBaja = fechaBaja;
        this.estado = estado;
        this.idPersona = idPersona;
    }

    public Gremio(String nombreGremio, int nroPersonas, LocalTime horarioDesde, LocalTime horarioHasta, LocalDate fechaDesde, LocalDate fechaHasta, int nroArgentinos, String nombreContratista, String apellidoContratista, LocalDate fechaAlta, LocalDate fechaBaja, String estado, Long idPersona) {
        this.nombreGremio = nombreGremio;
        this.nroPersonas = nroPersonas;
        this.horarioDesde = horarioDesde;
        this.horarioHasta = horarioHasta;
        this.fechaDesde = fechaDesde;
        this.fechaHasta = fechaHasta;
        this.nroArgentinos = nroArgentinos;
        this.nombreContratista = nombreContratista;
        this.apellidoContratista = apellidoContratista;
        this.fechaAlta = fechaAlta;
        this.fechaBaja = fechaBaja;
        this.estado = estado;
        this.idPersona = idPersona;
    }

    public Long getIdGremio() {
        return idGremio;
    }

    public void setIdGremio(Long idGremio) {
        this.idGremio = idGremio;
    }

    public String getNombreGremio() {
        return nombreGremio;
    }

    public void setNombreGremio(String nombreGremio) {
        this.nombreGremio = nombreGremio;
    }

    public int getNroPersonas() {
        return nroPersonas;
    }

    public void setNroPersonas(int nroPersonas) {
        this.nroPersonas = nroPersonas;
    }

    public LocalTime getHorarioDesde() {
        return horarioDesde;
    }

    public void setHorarioDesde(LocalTime horarioDesde) {
        this.horarioDesde = horarioDesde;
    }

    public LocalTime getHorarioHasta() {
        return horarioHasta;
    }

    public void setHorarioHasta(LocalTime horarioHasta) {
        this.horarioHasta = horarioHasta;
    }

    public LocalDate getFechaDesde() {
        return fechaDesde;
    }

    public void setFechaDesde(LocalDate fechaDesde) {
        this.fechaDesde = fechaDesde;
    }

    public LocalDate getFechaHasta() {
        return fechaHasta;
    }

    public void setFechaHasta(LocalDate fechaHasta) {
        this.fechaHasta = fechaHasta;
    }

    public int getNroArgentinos() {
        return nroArgentinos;
    }

    public void setNroArgentinos(int nroArgentinos) {
        this.nroArgentinos = nroArgentinos;
    }

    public String getNombreContratista() {
        return nombreContratista;
    }

    public void setNombreContratista(String nombreContratista) {
        this.nombreContratista = nombreContratista;
    }

    public String getApellidoContratista() {
        return apellidoContratista;
    }

    public void setApellidoContratista(String apellidoContratista) {
        this.apellidoContratista = apellidoContratista;
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

    public Long getIdPersona() {
        return idPersona;
    }

    public void setIdPersona(Long idPersona) {
        this.idPersona = idPersona;
    }

    @Override
    public String toString() {
        return "idGremio: " + idGremio + "\nnombreGremio: " + nombreGremio + "\nnroPersonas: " + nroPersonas + "\nhorarioDesde: " + horarioDesde + 
                "\nhorarioHasta: " + horarioHasta + "\nfechaDesde: " + fechaDesde + "\nfechaHasta: " + fechaHasta + "\nnroArgentinos: " + nroArgentinos + 
                "\nnombreContratista: " + nombreContratista + "\napellidoContratista: " + apellidoContratista + "\nfechaAlta: " + fechaAlta + 
                "\nfechaBaja: " + fechaBaja + "\nestado: " + estado + "\nidPersona: " + idPersona + '}';
    }
    
    
    
}