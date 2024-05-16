
const mongoose = require('mongoose')
const { modelName } = require("../models/contratos")
var Contratos = require("../models/contratos")

module.exports.list = ()=>{
    return Contratos
        .find()
        .sort({idcontrato: 1})
        .exec()
}

module.exports.findById = id => {
    return Contratos
        .findOne({idcontrato: id})
        .exec()
}

module.exports.listEntidade = () => {
    return Contratos.distinct("entidade_comunicante")
        .then(entidade => {
            entidade.sort();
            return entidade;
        });
                    
};


module.exports.listTipo = () => {
    return Contratos.distinct("tipoprocedimento")
        .then(tipos => {
            tipos.sort();
            return tipos;
        });

};

module.exports.listTipo = () => {
    return Contratos.find({ tipoprocedimento: 1}).exec();
};

module.exports.update = (idcontrato, contrato) => {
    return Contratos
        .findByIdAndUpdate({ idcontrato: idcontrato }, contrato, { new: true })
        .exec();
}

module.exports.remove = idcontrato => {
    return Contratos
        .findByIdAndDelete({ idcontrato: idcontrato })
        .exec();
}

module.exports.insert = contrato => {
    if((Contratos.find({ idcontrato: contrato.idcontrato}).exec()).lenght !=1){
        var newContrato = new Contratos(contrato)
        return newContrato.save()
    }
}

