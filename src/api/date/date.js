module.exports = (req, res) => {
    let date_ob = new Date();

    let jour = ("0" + date_ob.getDate()).slice(-2);
    let mois = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let annee = date_ob.getFullYear();

    res.send(annee + "/" + mois + "/" + jour);
}