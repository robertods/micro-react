const url = 'http://localhost:3000'

export async function get() {
  const r = await fetch(url + '/products')
  const json = await r.json()
  return json
}

export async function getById(id) {
  const r = await fetch(url + '/products/'+id)
  const json = await r.json()
  return json
}

export async function add(product) {
  const r = await fetch(url + '/products', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
  })
  const json = await r.json()
  return json
}

export async function edit(id, product) {
  const r = await fetch(url + '/products/' + id, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
  })
  const json = await r.json()
  return json
}

export async function remove(id) {
  const r = await fetch(url + '/products/' + id, {
    method: 'delete'
  })
  const json = await r.json()
  return json
}
