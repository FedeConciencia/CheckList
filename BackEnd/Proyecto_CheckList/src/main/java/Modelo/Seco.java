
package Modelo;

import java.time.LocalDate;


public class Seco {
    
    private Long idSeco;
    private LocalDate fechaInicial;
    private LocalDate fechaFinal;
    private String mLineales;
    private String mPerson;
    private String m2Muro;
    private String muroPerson;
    private String m2Cubierta;
    private String cubiertaPerson;
    private String metrosLineales;
    private String linealesPerson;
    private String diasCaidos;
    private String motivo;
    private String materialVigas;
    private String materialMuros;
    private String materialCubiertas;
    private String comentario;
    private LocalDate fechaAlta;
    private LocalDate fechaBaja;
    private String estado;
    private Long idVisita;

    public Seco() {
    }

    public Seco(Long idSeco, LocalDate fechaInicial, LocalDate fechaFinal, String mLineales, String mPerson, String m2Muro, String muroPerson, String m2Cubierta, String cubiertaPerson, String metrosLineales, String linealesPerson, String diasCaidos, String motivo, String materialVigas, String materialMuros, String materialCubiertas, String comentario, LocalDate fechaAlta, LocalDate fechaBaja, String estado, Long idVisita) {
        this.idSeco = idSeco;
        this.fechaInicial = fechaInicial;
        this.fechaFinal = fechaFinal;
        this.mLineales = mLineales;
        this.mPerson = mPerson;
        this.m2Muro = m2Muro;
        this.muroPerson = muroPerson;
        this.m2Cubierta = m2Cubierta;
        this.cubiertaPerson = cubiertaPerson;
        this.metrosLineales = metrosLineales;
        this.linealesPerson = linealesPerson;
        this.diasCaidos = diasCaidos;
        this.motivo = motivo;
        this.materialVigas = materialVigas;
        this.materialMuros = materialMuros;
        this.materialCubiertas = materialCubiertas;
        this.comentario = comentario;
        this.fechaAlta = fechaAlta;
        this.fechaBaja = fechaBaja;
        this.estado = estado;
        this.idVisita = idVisita;
    }

    public Seco(LocalDate fechaInicial, LocalDate fechaFinal, String mLineales, String mPerson, String m2Muro, String muroPerson, String m2Cubierta, String cubiertaPerson, String metrosLineales, String linealesPerson, String diasCaidos, String motivo, String materialVigas, String materialMuros, String materialCubiertas, String comentario, LocalDate fechaAlta, LocalDate fechaBaja, String estado, Long idVisita) {
        this.fechaInicial = fechaInicial;
        this.fechaFinal = fechaFinal;
        this.mLineales = mLineales;
        this.mPerson = mPerson;
        this.m2Muro = m2Muro;
        this.muroPerson = muroPerson;
        this.m2Cubierta = m2Cubierta;
        this.cubiertaPerson = cubiertaPerson;
        this.metrosLineales = metrosLineales;
        this.linealesPerson = linealesPerson;
        this.diasCaidos = diasCaidos;
        this.motivo = motivo;
        this.materialVigas = materialVigas;
        this.materialMuros = materialMuros;
        this.materialCubiertas = materialCubiertas;
        this.comentario = comentario;
        this.fechaAlta = fechaAlta;
        this.fechaBaja = fechaBaja;
        this.estado = estado;
        this.idVisita = idVisita;
    }

    public Long getIdSeco() {
        return idSeco;
    }

    public void setIdSeco(Long idSeco) {
        this.idSeco = idSeco;
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

    public String getmLineales() {
        return mLineales;
    }

    public void setmLineales(String mLineales) {
        this.mLineales = mLineales;
    }

    public String getmPerson() {
        return mPerson;
    }

    public void setmPerson(String mPerson) {
        this.mPerson = mPerson;
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

    public String getMaterialVigas() {
        return materialVigas;
    }

    public void setMaterialVigas(String materialVigas) {
        this.materialVigas = materialVigas;
    }

    public String getMaterialMuros() {
        return materialMuros;
    }

    public void setMaterialMuros(String materialMuros) {
        this.materialMuros = materialMuros;
    }

    public String getMaterialCubiertas() {
        return materialCubiertas;
    }

    public void setMaterialCubiertas(String materialCubiertas) {
        this.materialCubiertas = materialCubiertas;
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
        return "idSeco: " + idSeco + "\nfechaInicial: " + fechaInicial + "\nfechaFinal: " + fechaFinal + "\nmLineales: " + mLineales + "\nmPerson: " + mPerson + "\nm2Muro: " + m2Muro + 
                "\nmuroPerson: " + muroPerson + "\nm2Cubierta: " + m2Cubierta + "\ncubiertaPerson: " + cubiertaPerson + "\nmetrosLineales: " + metrosLineales + 
                "\nlinealesPerson: " + linealesPerson + "\ndiasCaidos: " + diasCaidos + "\nmotivo: " + motivo + "\nmaterialVigas: " + materialVigas + 
                "\nmaterialMuros: " + materialMuros + "\nmaterialCubiertas: " + materialCubiertas + "\ncomentario: " + comentario + "\nfechaAlta: " + fechaAlta + 
                "\nfechaBaja: " + fechaBaja + "\nestado: " + estado + "\nidVisita: " + idVisita;
    }
    
    
    
}