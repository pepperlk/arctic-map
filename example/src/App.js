import React, { Component } from 'react'

import { ArcticMap, ArcticMapLayer, ArcticMapEdit, ArcticMapLLDSearch, ArcticMapLayerPopup } from './ArcticMap'


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.am = React.createRef();

    this.state.points = {
      type: "FeatureCollection",
      features:
        [
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.99351472, -117.92254963] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.8590917, -118.0309504] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.00342894, -118.02979634] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.9299777, -118.10876678] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.94663645, -117.96062222] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.06438324, -118.05848645] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.86548361, -117.91425383] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.067322, -118.10739705] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.00784815, -118.02390034] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.86368754, -117.95743645] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.98564097, -117.8626638] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.97251711, -117.86557286] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.94765945, -118.05607682] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.00199122, -118.07621604] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.94453912, -118.11281608] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.04488045, -117.85437666] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.99428168, -118.07053663] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.98207337, -117.89244948] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.9735523, -117.88850348] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.96338334, -118.08473999] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.09362833, -117.90733248] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.90565889, -118.11133442] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.95398604, -118.00158962] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.9925377, -117.9562086] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.98452468, -118.11853765] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.04960152, -117.8910617] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.03955153, -118.02408106] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.88947024, -118.07080594] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.90877016, -117.99108194] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.08811425, -117.88275317] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.09179725, -117.89508875] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.96577831, -117.81567391] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.9942643, -117.84548038] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.02457795, -117.92670123] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.02556546, -117.82231767] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.98775724, -118.04600604] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.96746852, -117.92851786] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.88488612, -117.91637423] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.92908512, -118.00472048] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.97407341, -117.94309097] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.9929193, -117.93190952] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.05501511, -118.12064529] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.99823566, -117.90314479] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.04410522, -117.84291765] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.9845621, -117.85157601] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.85108567, -118.04251966] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.9917569, -117.93381462] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.02127477, -117.93850475] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.94329178, -118.12070846] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.98341536, -118.00243077] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.9825035, -118.05908698] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.89944152, -118.06647477] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.03088822, -118.10316748] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.09299626, -117.97016119] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.97936839, -118.05672906] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.05937809, -118.09737432] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.93858152, -117.90449515] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.84815109, -117.92251212] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.08160248, -117.95397673] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.93750551, -117.81787961] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.92911683, -117.97741017] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.02859377, -117.99794705] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.97445619, -118.03232833] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.84712506, -117.96840787] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.96551751, -117.84820675] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.03128774, -117.89709834] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.09063775, -118.09516588] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.07199332, -117.96922271] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.00101098, -117.81590056] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.00081885, -118.0385462] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.06791378, -117.91118141] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.00625307, -118.12421473] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.10423968, -117.92078411] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.07879271, -118.06597014] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.98665289, -118.04349528] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.97476473, -118.0934581] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.88712054, -117.88343102] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.86416311, -117.9200459] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.09480612, -117.89143969] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.93026033, -118.01365405] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.87148732, -118.02962329] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.06558106, -118.0434536] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.07324585, -118.02654352] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.01255339, -118.12784829] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.07381885, -117.85647497] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.98674837, -117.96821173] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.0355368, -118.12910957] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.92249467, -118.07624424] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.10649312, -117.94930117] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.86757677, -118.02245632] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.86717407, -117.97800391] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.05127557, -118.04936065] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.99240433, -118.01810546] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.0648502, -118.05889387] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.02861291, -118.14064474] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.97406225, -117.83237378] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.94102945, -118.11856304] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.89453257, -118.09223135] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [33.99952379, -117.87769097] } },
          { type: "Feature", properties: { name: "Test", id: "1234" }, geometry: { type: "Point", coordinates: [34.00586583, -117.94908554] } }
        ]
    };

    this.geojsontemplate = '{name} <a href={id} >{name}</a>';
    //this.geojsontemplate = "I am located in <b>{Park}</b> in the city of <b>{City}</b>."
  }

  onnew(event) {
    console.log(event);
    console.log(JSON.stringify(event.data));
  }

  componentDidMount() {
    //src={this.state.points}
  }

  mapready(event) {
    // var geojson = {"geometry":{"spatialReference":{"latestWkid":3857,"wkid":102100},"rings":[[[-12913274.173206665,5677703.816462832],[-12925015.020184122,5885123.306559217],[-12782169.442008395,5941870.186216331],[-12586490.649598394,5709012.393390218],[-12656935.13429885,5487895.29825049],[-12913274.173206665,5677703.816462832]]]},"symbol":{"type":"esriSFS","color":[224,206,69,204],"outline":{"type":"esriSLS","color":[255,255,0,255],"width":3,"style":"esriSLSSolid"},"style":"esriSFSSolid"},"attributes":{}};
    // event.target.setJson(geojson);
  }

  layerready(event) {

    //event.target.zoomto();

  }


  render() {
    return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <ArcticMap basemap="topo" search ref={this.am} onmapready={this.mapready.bind(this)}>
        <ArcticMapEdit single polygon onnewfeature={this.onnew} />
          <ArcticMapLayer
            type="geojson"
            template={this.geojsontemplate} onready={this.layerready.bind(this)} />

            <ArcticMapLayer identMaxZoom="13"

            type="dynamic"
            src="https://gis.test.blm.gov/arcgis/rest/services/admin_boundaries/BLM_Natl_AdminUnit/MapServer/" />
         

          <ArcticMapLayer

            type="dynamic"
            src="https://gis.blm.gov/arcgis/rest/services/Cadastral/BLM_Natl_PLSS_CadNSDI/MapServer" >

      <ArcticMapLayerPopup layerid="0" popup={(context, all) =>{
             
                return( <h3>{context.attributes.NAME}</h3>);
            }}>

            </ArcticMapLayerPopup>

            <ArcticMapLayerPopup layerid="3"popup={(context, all) =>{
              console.log(context);
                return( <h3>{context.attributes["Second Division Identifier"] }</h3>);
            }}>

          </ArcticMapLayerPopup> 

          </ArcticMapLayer>

         {/*  <ArcticMapLayer transparency=".32" identMaxZoom="30" blockIdentSelect type="dynamic" src="https://gis.blm.gov/arcgis/rest/services/lands/BLM_Natl_SMA_Cached_without_PriUnk/MapServer/" />

          <ArcticMapLayer transparency=".32"  identMaxZoom="1" blockIdentSelect type="dynamic" src="https://gis.blm.gov/arcgis/rest/services/lands/BLM_Natl_SMA_LimitedScale/MapServer/" />
          

          point line square circle  */}
          
          <ArcticMapLLDSearch />

        </ArcticMap>
      </div>
    )
  }
}
