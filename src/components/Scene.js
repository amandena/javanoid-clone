import React, { useReducer } from 'react'
import { LEVELS } from '../levels'
import { getGameStateFromLevel } from '../core'
import Level from './Level'
import Lives from './Lives'
import Block from './Block'
import Paddle from './Paddle'
import Ball from './Ball'

const Scene = (containerSize) => {

  const getInitialLevel = () => {
    const inState = localStorage.getItem('level')
    return inState ? parseInt(inState, 10) : 0
  }

  console.log(`${containerSize.width} x ${containerSize.height}`)
  return <svg/>
}

export default Scene