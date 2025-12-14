const certificateRepository = require('../reposatory/certificate.repository');

const getAllCertificates = async () => {
    return await certificateRepository.findAll();
};

const getCertificateById = async certificateId => {
    return await certificateRepository.findById(certificateId);
};

const createCertificate = async certificateData => {
    return await certificateRepository.create(certificateData);
};

const updateCertificate = async (certificateId, certificateData) => {
    return await certificateRepository.update(certificateId, certificateData);
};

const deleteCertificate = async certificateId => {
    return await certificateRepository.remove(certificateId);
};

const certificateService = {
    getAllCertificates,
    getCertificateById,
    createCertificate,
    updateCertificate,
    deleteCertificate,
};

module.exports = certificateService;
