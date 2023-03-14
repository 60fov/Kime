import { keyLookUp, getKeymap } from '~/keylayout'
import {
    isInitialJamo, isMedialJamo, isFinalJamo,
    initialJamoOffset, medialJamoOffset, finalJamoOffset,
    composeJamo, composeSyllable, composeBlock, compose,
    decomposeCompatibilityJamo, decomposeBlock, decompose
} from './jamo'

const kime = {
    keyLookUp,
    key: keyLookUp,
    getKeymap,
    isInitialJamo, isMedialJamo, isFinalJamo,
    initialJamoOffset, medialJamoOffset, finalJamoOffset,
    composeJamo, composeSyllable, composeBlock, compose,
    decomposeCompatibilityJamo, decomposeBlock, decompose
}

export default kime

/* TODO consider group access 
    kime.key...
    kime.jamo...
*/