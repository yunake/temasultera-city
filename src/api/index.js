import DB from './firebase'

export const storeMarker = async marker => {
  try {
    await DB.collection('markers-city').add(marker)
  } catch (e) {
    console.error(e)
    alert(e)
  }
}

export const deleteMarker = async markerFID => {
  try {
    await DB.collection('markers-city').doc(markerFID).delete()
  } catch (e) {
    console.error(e)
    alert(e)
  }
}

export const fetchMarkers = async () => {
  try {
    const querySnapshot = await DB.collection('markers-city').get()

    const markers = []
    querySnapshot.forEach(doc => {
      const entity = doc.data()
      markers.push({ fid: doc.id, ...entity })
    })
    console.log('MARKERS: ', markers)
    return markers
  } catch (e) {
    console.error(e)
    alert(e)
  }
}

export const parseMarkers = (querySnapshot) => {
  try {
    // const querySnapshot = await DB.collection('markers').get()

    const markers = []
    querySnapshot.forEach(doc => {
      const entity = doc.data()
      markers.push({ fid: doc.id, ...entity })
    })
    console.log('MARKERS: ', markers)
    return markers
  } catch (e) {
    console.error(e)
    alert(e)
  }
}

export const editMarker = async ({ fid, ...marker }) => {
  try {
    await DB.collection('markers-city').doc(fid).update(marker)
  } catch (e) {
    console.error(e)
    alert(e)
  }
}
