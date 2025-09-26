const express = require('express');
const router = express.Router();
const ctrl = require('../database/controller')

//const auth = require('../middlewares/authentication')


router.get('/users/all', ctrl.getAllUsers);
router.get('/users/allgds', ctrl.getAllgds);
router.post('/users/login', ctrl.signin);
router.use(ctrl.isAuthenticated);
router.get('/customers/all', ctrl.getAllEmpresas);
router.get('/delivery', ctrl.getAlbaranData);
router.put('/upload', ctrl.cargar);
router.put('/download', ctrl.descargar);
router.post('/postphoto', ctrl.postphoto);
router.get('/getphotos', ctrl.getPhotos)
router.delete('/deletephoto', ctrl.delPhoto);
router.get('/itemdata', ctrl.getItemData)
router.get('/itemgetphotos', ctrl.getItemPhotos)
router.post('/ipostphoto', ctrl.Itempostphoto);
router.delete('/ideletephoto', ctrl.ItemdelPhoto);
router.get('/itemextradata', ctrl.getItemExtraData)
router.patch('/itemPatchDepartment', ctrl.itemPatchDepartment)
router.patch('/itempatchfamily', ctrl.patchItemFamily)
router.patch('/itempatchdimension', ctrl.patchItemDimension)
router.patch('/itempatchpeso', ctrl.patchItemPeso)

router.get('/itemgetphotosua', ctrl.getItemPhotosua)
router.post('/ipostphotoua', ctrl.Itempostphotoua);
router.delete('/ideletephotoua', ctrl.ItemdelPhotoua);

module.exports = router;