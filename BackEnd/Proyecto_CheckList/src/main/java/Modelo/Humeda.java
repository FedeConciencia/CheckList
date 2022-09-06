
package Modelo;

import java.time.LocalDate;


public class Humeda {
    
    
    private Long idHumeda;
    private LocalDate fechaInicial;
    private LocalDate fechaFinal;
    private String m2Piso;
    private String pisoPerson;
    private String metros;
    private String metrosPerson;
    private String m2Muro;
    private String muroPerson;
    private String m2Cubierta;
    private String cubiertaPerson;
    private String metrosLineales;
    private String linealesPerson;
    private String diasCaidos;
    private String motivo;
    private String comentario;
    private LocalDate fechaAlta;
    private LocalDate fechaBaja;
    private String estado;
    private Long idVisita;

    public Humeda() {
    }

    public Humeda(Long idHumeda, LocalDate fechaInicial, LocalDate fechaFinal, String m2Piso, String pisoPerson, String metros, String metrosPerson, String m2Muro, String muroPerson, String m2Cubierta, String cubiertaPerson, String metrosLineales, String linealesPerson, String diasCaidos, String motivo, String comentario, LocalDate fechaAlta, LocalDate fechaBaja, String estado, Long idVisita) {
        this.idHumeda = idHumeda;
        this.fechaInicial = fechaInicial;
        this.fechaFinal = fechaFinal;
        this.m2Piso = m2Piso;
        this.pisoPerson = pisoPerson;
        this.metros = metros;
        this.metrosPerson = metrosPerson;
        this.m2Muro = m2Muro;
        this.muroPerson = muroPerson;
        this.m2Cubierta = m2Cubierta;
        this.cubiertaPerson = cubiertaPerson;
        this.metrosLineales = metrosLineales;
        this.linealesPerson = linealesPerson;
        this.diasCaidos = diasCaidos;
        this.motivo = motivo;
        this.comentario = comentario;
        this.fechaAlta = fechaAlta;
        this.fechaBaja = fechaBaja;
        this.estado = estado;
        this.idVisita = idVisita;
    }

    public Humeda(LocalDate fechaInicial, LocalDate fechaFinal, String m2Piso, String pisoPerson, String metros, String metrosPerson, String m2Muro, String muroPerson, String m2Cubierta, String cubiertaPerson, String metrosLineales, String linealesPerson, String diasCaidos, String motivo, String comentario, LocalDate fechaAlta, LocalDate fechaBaja, String estado, Long idVisita) {
        this.fechaInicial = fechaInicial;
        this.fechaFinal = fechaFinal;
        this.m2Piso = m2Piso;
        this.pisoPerson = pisoPerson;
        this.metros = metros;
        this.metrosPerson = metrosPerson;
        this.m2Muro = m2Muro;
        this.muroPerson = muroPerson;
        this.m2Cubierta = m2Cubierta;
        this.cubiertaPerson = cubiertaPerson;
        this.metrosLineales = metrosLineales;
        this.linealesPerson = linealesPerson;
        this.diasCaidos = diasCaidos;
        this.motivo = motivo;
        this.comentario = comentario;
        this.fechaAlta = fechaAlta;
        this.fechaBaja = fechaBaja;
        this.estado = estado;
        this.idVisita = idVisita;
    }

    public Long getIdHumeda() {
        return idHumeda;
    }

    public void setIdHumeda(Long idHumeda) {
        this.idHumeda = idHumeda;
    }

    public LocalDate getFechaInicio() {
        return fechaInicial;
    }

    public void setFechaInicio(LocalDate fechaInicial) {
        this.fechaInicial = fechaInicial;
    }

    public LocalDate getFechaFinal() {
        return fechaFinal;
    }

    public void setFechaFinal(LocalDate fechaFinal) {
        this.fechaFinal = fechaFinal;
    }

    public String getM2Piso() {
        return m2Piso;
    }

    public void setM2Piso(String m2Piso) {
        this.m2Piso = m2Piso;
    }

    public String getPisoPerson() {
        return pisoPerson;
    }

    public void setPisoPerson(String pisoPerson) {
        this.pisoPerson = pisoPerson;
    }

    public String getMetros() {
        return metros;
    }

    public void setMetros(String metros) {
        this.metros = metros;
    }

    public String getMetrosPerson() {
        return metrosPerson;
    }

    public void setMetrosPerson(String metrosPerson) {
        this.metrosPerson = metrosPerson;
    }

    public String getM2Muro() {
        return m2Muro;
    }

    public void setM2Muro(String m2Muro) {
        this.m2Muro = m2Muro;
    }

    public String getMuroPerson() {
        return muroPerson;
    }

    public void setMuroPerson(String muroPerson) {
        this.muroPerson = muroPerson;
    }

    public String getM2Cubierta() {
        return m2Cubierta;
    }

    public void setM2Cubierta(String m2Cubierta) {
        this.m2Cubierta = m2Cubierta;
    }

    public String getCubiertaPerson() {
        return cubiertaPerson;
    }

    public void setCubiertaPerson(String cubiertaPerson) {
        this.cubiertaPerson = cubiertaPerson;
    }

    public String getMetrosLineales() {
        return metrosLineales;
    }

    public void setMetrosLineales(String metrosLineales) {
        this.metrosLineales = metrosLineales;
    }

    public String getLinealesPerson() {
        return linealesPerson;
    }

    public void setLinealesPerson(String linealesPerson) {
        this.linealesPerson = linealesPerson;
    }

    public String getDiasCaidos() {
        return diasCaidos;
    }

    public void setDiasCaidos(String diasCaidos) {
        this.diasCaidos = diasCaidos;
    }

    public String getMotivo() {
        return motivo;
    }

    public void setMotivo(String motivo) {
        this.motivo = motivo;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
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

    public Long getIdVisita() {
        return idVisita;
    }

    public void setIdVisita(Long idVisita) {
        this.idVisita = idVisita;
    }

    @Override
    public String toString() {
        return "idHumeda: " + idHumeda + "\nfechaInicial: " + fechaInicial + "\nfechaFinal: " + fechaFinal + "\nm2Piso: " + m2Piso + "\npisoPerson: " + pisoPerson + 
                "\nmetros: " + metros + "\nmetrosPerson: " + metrosPerson + "\nm2Muro: " + m2Muro + "\nmuroPerson: " + muroPerson + "\nm2Cubierta: " + m2Cubierta + 
                "\ncubiertaPerson: " + cubiertaPerson + "\nmetrosLineales: " + metrosLineales + "\nlinealesPerson: " + linealesPerson + "\ndiasCaidos: " + diasCaidos + 
                "\nmotivo: " + motivo + "\ncomentario: " + comentario + "\nfechaAlta: " + fechaAlta + "\nfechaBaja: " + fechaBaja + 
                "\nestado: " + estado + "\nidVisita: " + idVisita;
    }
    
    
    
   
    
    
}
