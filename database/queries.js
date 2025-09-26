module.exports = {
    getAllUsers: `select Nombre, Usuario from APPIA_INFO.dbo.Usuarios where Usuario like 'RF%' or Usuario like 'RES%' or Usuario = 'VGG_S' order by Nombre`,
    //getAllUsers: `select isnull(Nombre, 'null') as Nombre, Usuario from APPIA_INFO.dbo.Usuarios where EsUsuarioAppiaRadioSN = -1`,
    //newUser: 'insert into users (name, email, pass) values (@name, @email, @pass)',
    getUserPass: 'select Contrasena from APPIA_INFO.dbo.Usuarios where Usuario = @name',
    getAllEmpresas: 'select Empresa from APPIA_INFO.dbo.Empresas where Estilo = 18 order by Empresa',
    getAlbaranData: `select Descripcion, Descripcion2, NroDS from APPIA_SQL.dbo.LineasDePackingList where NumeroDePackingList = @PLE and Empresa = @Empresa`, //order by Descripcion2
    putCargadoOnUd: `update APPIA_SQL.dbo.LineasDePackingList set NroDS = 'Cargado' where Descripcion = @Descripcion and NumeroDePackingList = @PLE`,
    delCargadoOnUd: `update APPIA_SQL.dbo.LineasDePackingList set NroDS = null where Descripcion = @Descripcion and NumeroDePackingList = @PLE`,
    setControlUsuario2: 'update APPIA_SQL.dbo.PackingList set ControlUsuario2= @usuario, ControlFecha2 = getdate() where Empresa = @Empresa and NumeroDePackingList = @PLE',
    setEstiloAE: `update APPIA_SQL.dbo.PackingList set Estilo = @Estilo where NumeroDePackingList = @NumeroDePackingList`,
    selAgencias: 'select distinct(CodigoDeServicioDeTransporte) from Appia_Sql.dbo.AlbaranesDeEntrega where Empresa = @Empresa',
    getAEagencia: 'select CodigoDeServicioDeTransporte from Appia_Sql.dbo.AlbaranesDeEntrega where Empresa = @Empresa and NumeroDeAlbaran = @ae',
    selPL: `select top 1 NumeroDePackingList FROM APPIA_SQL.dbo.LineasDePackingList where Descripcion = @Descripcion`,
    setCodigoEstadoAE: `update APPIA_SQL.dbo.AlbaranesDeEntrega set EstadoDeServicio = @Estado where Empresa = @Empresa and NumeroDeAlbaran = @NumeroDeAlbaran`,
    getNroDS: `select NroDS from APPIA_SQL.dbo.LineasDePackingList where Empresa = @Empresa and NumeroDePackingList = @PLE`,
    postPhotoLink: `insert into APPIA_SQL.dbo.Imagenes (DOCID, DOCTabla, FOTONotas, FOTORuta) values (@customerbraedocument, 'AlbaranesDeEntrega', 'Embarques', @path) `,
    deletePhotoLink: `delete from APPIA_SQL.dbo.Imagenes where DOCID = @customerbraedocument and DOCTabla = 'AlbaranesDeEntrega' and FOTONotas like 'Embarques' and FOTORuta = @path`,

    getAllGDS: `select Nombre, Usuario from APPIA_INFO.dbo.Usuarios where EsAdministradorSN = -1 or Estilo = 62 order by Nombre`,
    getItemData: `select CodigoDeArticulo, Descripcion1, Descripcion2, CodigoAlternativo, CodigoDeDepartamento, CodigoDeFamilia, Codigodesubfamilia, IDUnidad, IDUnidadA, equivalenciaA, CodigoDeBarrasA, IDUnidadB, equivalenciaB,codigodebarrasB, longitud, ancho, alto, pesoneto, PesoDeEmbalaje, PesoBruto, UnidadDeDimensiones, UnidadDePeso from APPIA_SQL.dbo.Articulos where Empresa = @Empresa and `,
    getItemPhotos: `select FOTORuta from APPIA_SQL.dbo.Imagenes where DOCTabla = 'Articulos' and DOCID = @DOCID and FOTOTipoDeImagen = 'UV'`,
    postItemPhotoLink: `insert into APPIA_SQL.dbo.Imagenes (DOCID, DOCTabla, FOTONotas, FOTORuta, FOTOTipoDeImagen) values (@customerbraedocument, 'Articulos', 'Unidad de venta', @path, 'UV') `,
    deleteItemPhotoLink: `delete from APPIA_SQL.dbo.Imagenes where DOCID = @customerbraedocument and DOCTabla = 'Articulos' and FOTORuta = @path and FOTOTipoDeImagen = 'UV'`,

    getItemDepartment: `select CodigoDeDepartamento from APPIA_SQL.dbo.Departamentos where Empresa = @Empresa`,
    itemPatchDepartment: `update APPIA_SQL.dbo.Articulos set CodigoDeDepartamento = @CodigoDeDepartamento where Empresa = @Empresa and CodigoDeArticulo = @CodigoDeArticulo `,

    getItemFamily: `select CodigoDeFamilia from APPIA_SQL.dbo.Familias where Empresa = @Empresa`,
    patchItemFamily: `update APPIA_SQL.dbo.Articulos set CodigoDeFamilia = @CodigoDeFamilia where Empresa = @Empresa and CodigoDeArticulo = @CodigoDeArticulo `,
    patchItemDimension: `update APPIA_SQL.dbo.Articulos set UnidadDeDimensiones = @UnidadDeDimensiones, Ancho = @Ancho, Longitud = @Longitud, Alto = @Alto, Volumen = @Volumen where Empresa = @Empresa and CodigoDeArticulo = @CodigoDeArticulo `,
    patchItemPeso: `update APPIA_SQL.dbo.Articulos set PesoNeto = @PesoNeto, PesoDeEmbalaje = @PesoDeEmbalaje, PesoBruto = @PesoBruto, UnidadDePeso = @UnidadDePeso where Empresa = @Empresa and CodigoDeArticulo = @CodigoDeArticulo `,

    getItemPhotosua: `select FOTORuta from APPIA_SQL.dbo.Imagenes where DOCTabla = 'Articulos' and DOCID = @DOCID and FOTOTipoDeImagen = 'UA'`,
    postItemPhotoLinkua: `insert into APPIA_SQL.dbo.Imagenes (DOCID, DOCTabla, FOTONotas, FOTORuta, FOTOTipoDeImagen) values (@customerbraedocument, 'Articulos', 'Unidad de almacenamiento', @path, 'UA') `,
    deleteItemPhotoLinkua: `delete from APPIA_SQL.dbo.Imagenes where DOCID = @customerbraedocument and DOCTabla = 'Articulos' and FOTORuta = @path and FOTOTipoDeImagen = 'UA'`,
}