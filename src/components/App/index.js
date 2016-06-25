import React, {Component} from 'react';
import Empty from '../Empty'
import Immutable from 'immutable'
import {isValidProps, delay} from '../utils'
import CommonComponent from '../CommonComponent'

import styles from '../Common.css'

import Header from '../Header'
import Title from '../Title'
import Text from '../Text'
import ShotBlock from '../ShotBlock'
import MyMap from '../MyMap'
import NumberText from '../NumberText'
import MedText from '../MedText'


export default class App extends CommonComponent {
  constructor(props) {
    super(props)

    this.state = {}
  }

  shouldComponentUpdate(nextProps, nextState) {
    var result = super.shouldComponentUpdate(nextProps, nextState)
    console.log('App.shouldComponentUpdate: result:', result)

    return result
  }
  
  render() {
    const {dispatch, myId, Entities, immutableEntities, rootState} = this.props
    if(!isValidProps(myId, Entities)) return (<Empty />)

    const {[myId]: App} = Entities

    const {headerId, titleId, wholeViewId, singleId, featureId, rootId, extraId, nameId, telId, addressId, emailId, myMapId, cropId, varietyId, beforeId, dayId, sickDayId, acreId, sickAcreId, medId, fertileId, commentId} = App

    var rowClassName = "col-md-12 " + styles['situation']
    var buttonRowClassName = "col-md-12 " + styles['button-row']
    var buttonClassName = "btn btn-primary col-md-12"

    var onClick = (e) => {
      console.log('App.render.onClick: e:', e)
    }
    
    return (
      <div className="container">
        <Header dispatch={dispatch} myId={headerId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" header="農業病蟲害諮詢網" />
        <Title dispatch={dispatch} myId={titleId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" title="聯絡資訊" />
        <MyMap dispatch={dispatch} myId={myMapId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} />
        <div className="row">
          <div className="col-md-12">
            <div className="form-horizontal">
        
              <Text dispatch={dispatch} myId={nameId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" label="詢問人" />
              <Text dispatch={dispatch} myId={addressId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" label="住址" />
              <Text dispatch={dispatch} myId={telId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" label="電話" />
              <Text dispatch={dispatch} myId={emailId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" label="Email" />
            </div>
          </div>
        </div>
        
        <Title dispatch={dispatch} myId={titleId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" title="請依項目提供照片" />
        <ShotBlock dispatch={dispatch} myId={wholeViewId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" name="園區全景圖" />
        <ShotBlock dispatch={dispatch} myId={singleId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" name="單枝植物" />
        <ShotBlock dispatch={dispatch} myId={featureId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" name="患部特寫" />
        <ShotBlock dispatch={dispatch} myId={rootId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" name="植物根部" />
        <ShotBlock dispatch={dispatch} myId={extraId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" name="額外補充照片" />
        <Title dispatch={dispatch} myId={titleId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" title="更多資訊" />
        <div className="col-md-12">
          <div className="form-horizontal">
            <Text dispatch={dispatch} myId={cropId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" label="作物名稱" />
            <Text dispatch={dispatch} myId={varietyId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" label="品種" />
            <Text dispatch={dispatch} myId={beforeId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" label="前期種植" />
            <NumberText dispatch={dispatch} myId={dayId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" label="種植天數" />
            <NumberText dispatch={dispatch} myId={sickDayId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" label="發病天數" />
            <NumberText dispatch={dispatch} myId={acreId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" label="栽種面積" />
            <NumberText dispatch={dispatch} myId={sickAcreId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" label="受害面積" />
          </div>
        </div>
        <div className={rowClassName}>
          <h2><span aria-hidden="true" className="glyphicon glyphicon-menu-down"></span>用藥情形</h2>
          <MedText dispatch={dispatch} myId={medId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" label="" />
        </div>
        <div className={rowClassName}>
          <h2><span aria-hidden="true" className="glyphicon glyphicon-menu-down"></span>施肥情形</h2>
          <MedText dispatch={dispatch} myId={fertileId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" label="施肥情形" />
        </div>
        <div className={rowClassName}>
          <h2><span aria-hidden="true" className="glyphicon glyphicon-menu-down"></span>補充說明</h2>
          <Text dispatch={dispatch} myId={commentId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" label="" />
        </div>
        <div className={buttonRowClassName}>
          <input type="button" className={buttonClassName} defaultValue="確認送出" onClick={onClick}/>
        </div>
      </div>  
    )
  }
}

//            <Text dispatch={dispatch} myId={addressId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" label="田地地址" />
