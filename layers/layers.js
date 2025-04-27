var wms_layers = [];

var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__0.addFeatures(features__0);
var lyr__0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__0, 
                style: style__0,
                popuplayertitle: 'Административная граница области',
                interactive: true,
                title: '<img src="styles/legend/_0.png" /> Административная граница области'
            });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'Районы',
                interactive: true,
    title: 'Районы<br />\
    <img src="styles/legend/_1_0.png" /> 1 - 6<br />\
    <img src="styles/legend/_1_1.png" /> 6 - 16<br />\
    <img src="styles/legend/_1_2.png" /> 16 - 231<br />\
    <img src="styles/legend/_1_3.png" /> 231 - 762<br />\
    <img src="styles/legend/_1_4.png" /> 762 - 1276<br />' });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'Реки',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> Реки'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'Новосибирская агломерация',
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> Новосибирская агломерация'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: 'Озера',
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> Озера'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: 'Населенные пункты',
                interactive: true,
                title: 'Населенные пункты'
            });
var format_10000_6 = new ol.format.GeoJSON();
var features_10000_6 = format_10000_6.readFeatures(json_10000_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10000_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10000_6.addFeatures(features_10000_6);
var lyr_10000_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10000_6, 
                style: style_10000_6,
                popuplayertitle: 'Постоянное население районов 10 000 чел',
                interactive: true,
                title: '<img src="styles/legend/10000_6.png" /> Постоянное население районов 10 000 чел'
            });
var format_10000_7 = new ol.format.GeoJSON();
var features_10000_7 = format_10000_7.readFeatures(json_10000_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10000_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10000_7.addFeatures(features_10000_7);
var lyr_10000_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10000_7, 
                style: style_10000_7,
                popuplayertitle: 'Постоянное население НА 10 000 чел',
                interactive: true,
                title: '<img src="styles/legend/10000_7.png" /> Постоянное население НА 10 000 чел'
            });

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr_10000_6.setVisible(true);lyr_10000_7.setVisible(true);
var layersList = [lyr__0,lyr__1,lyr__2,lyr__3,lyr__4,lyr__5,lyr_10000_6,lyr_10000_7];
lyr__0.set('fieldAliases', {'name': 'name', 'population': 'population', });
lyr__1.set('fieldAliases', {'name': 'name', 'population': 'population', 'area': 'area', 'density': 'density', '1-18': '1-18', '18-79': '18-79', 'Post_nas': 'Post_nas', });
lyr__2.set('fieldAliases', {'name': 'name', 'length': 'length', });
lyr__3.set('fieldAliases', {'population': 'population', 'name': 'name', '18-79': '18-79', '1-18': '1-18', 'Post_nas': 'Post_nas', });
lyr__4.set('fieldAliases', {'name': 'name', 'Area': 'Area', });
lyr__5.set('fieldAliases', {'population': 'population', 'name': 'name', });
lyr_10000_6.set('fieldAliases', {'id': 'id', });
lyr_10000_7.set('fieldAliases', {'id': 'id', });
lyr__0.set('fieldImages', {'name': 'TextEdit', 'population': 'TextEdit', });
lyr__1.set('fieldImages', {'name': 'TextEdit', 'population': 'TextEdit', 'area': 'TextEdit', 'density': 'TextEdit', '1-18': 'TextEdit', '18-79': 'TextEdit', 'Post_nas': 'TextEdit', });
lyr__2.set('fieldImages', {'name': 'TextEdit', 'length': 'TextEdit', });
lyr__3.set('fieldImages', {'population': 'TextEdit', 'name': 'TextEdit', '18-79': 'TextEdit', '1-18': 'TextEdit', 'Post_nas': 'TextEdit', });
lyr__4.set('fieldImages', {'name': 'TextEdit', 'Area': 'TextEdit', });
lyr__5.set('fieldImages', {'population': 'TextEdit', 'name': 'TextEdit', });
lyr_10000_6.set('fieldImages', {'id': 'TextEdit', });
lyr_10000_7.set('fieldImages', {'id': 'TextEdit', });
lyr__0.set('fieldLabels', {'name': 'no label', 'population': 'no label', });
lyr__1.set('fieldLabels', {'name': 'no label', 'population': 'no label', 'area': 'no label', 'density': 'no label', '1-18': 'no label', '18-79': 'no label', 'Post_nas': 'no label', });
lyr__2.set('fieldLabels', {'name': 'no label', 'length': 'no label', });
lyr__3.set('fieldLabels', {'population': 'no label', 'name': 'no label', '18-79': 'no label', '1-18': 'no label', 'Post_nas': 'no label', });
lyr__4.set('fieldLabels', {'name': 'no label', 'Area': 'no label', });
lyr__5.set('fieldLabels', {'population': 'no label', 'name': 'no label', });
lyr_10000_6.set('fieldLabels', {'id': 'no label', });
lyr_10000_7.set('fieldLabels', {'id': 'no label', });
lyr_10000_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});