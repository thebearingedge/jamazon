/* global app */

function renderListItem(item) {

  /**
   * <div class="item col-xs-12 col-sm-6 col-md-4 col-lg-3">
   *   <div class="thumbnail">
   *     <div class="caption">
   *       <h3>{ item.name }<span class="small"> by { item.brand }</span></h3>
   *       <p>{ item.description }</p>
   *       <span class="price label label-danger">{ item.price }</span>
   *     </div>
   *     <div class="image">
   *       <img src="{ item.imageUrl }" alt="{ item.name }"/>
   *     </div>
   *   </div>
   * </div>
   */

  var $item = document.createElement('div')
  $item.classList.add('list-item', 'col-xs-12', 'col-sm-6', 'col-md-4', 'col-lg-3')

  var $thumbnail = document.createElement('div')
  $thumbnail.classList.add('thumbnail')

  var $image = document.createElement('div')
  $image.classList.add('image')

  var $caption = document.createElement('div')
  $caption.classList.add('caption')

  var $title = document.createElement('h3')
  $title.textContent = item.name

  var $brand = document.createElement('span')
  $brand.classList.add('small')
  $brand.textContent = ' by ' + item.brand

  $title.appendChild($brand)
  $caption.appendChild($title)

  var $description = document.createElement('p')
  $description.textContent = item.description

  var $link = document.createElement('p')

  var $a = document.createElement('a')
  $a.textContent = 'Learn More'
  $a.dataset.itemId = item.id

  $link.appendChild($a)
  $description.appendChild($link)
  $caption.appendChild($description)

  var $price = document.createElement('span')
  $price.classList.add('price', 'label', 'label-danger')
  $price.textContent = '$' + item.price.toFixed(2)

  $caption.appendChild($price)
  $thumbnail.appendChild($caption)

  var $img = document.createElement('img')
  $img.setAttribute('src', item.imageUrl)
  $img.setAttribute('alt', item.name)

  $image.appendChild($img)
  $thumbnail.appendChild($image)

  $item.appendChild($thumbnail)

  return $item
}

function renderItemDetails(item) {

  var $itemDetails = document.createElement('div')
  $itemDetails.classList.add('col-xs-12', 'item-details')

  var $container = document.createElement('div')
  $container.classList.add('container', 'panel', 'panel-default')
  $itemDetails.appendChild($container)

  var $row = document.createElement('div')
  $row.classList.add('row', 'panel-body')
  $container.appendChild($row)

  var $image = document.createElement('div')
  $image.classList.add('col-md-6')
  $row.appendChild($image)

  var $img = document.createElement('img')
  $img.setAttribute('src', item.imageUrl)
  $image.appendChild($img)

  var $info = document.createElement('div')
  $info.classList.add('col-md-6')
  $row.appendChild($info)

  var $title = document.createElement('h1')
  $title.textContent = item.name
  $info.appendChild($title)

  var $brand = document.createElement('span')
  $brand.classList.add('small')
  $brand.textContent = ' by ' + item.brand
  $title.appendChild($brand)

  var $description = document.createElement('p')
  $description.textContent = item.description
  $info.appendChild($description)

  var $origin = document.createElement('p')
  $origin.textContent = item.origin
  $info.appendChild($origin)

  var $price = document.createElement('span')
  $price.classList.add('price', 'label', 'label-danger')
  $price.textContent = '$' + item.price.toFixed(2)
  $info.appendChild($price)

  var $hr = document.createElement('hr')
  $info.appendChild($hr)

  var $details = document.createElement('p')
  $details.textContent = item.details
  $info.appendChild($details)

  var $add = document.createElement('button')
  $add.classList.add('btn', 'btn-success')
  $add.textContent = 'Add to Cart'
  $info.appendChild($add)

  return $itemDetails
}

function findItem(items, itemId) {
  for (var i = 0; i < items.length; i++) {
    var item = items[i]
    if (item.id.toString() === itemId) {
      return item
    }
  }
}

function showView($views, viewId) {
  for (var i = 0; i < $views.children.length; i++) {
    var $childView = $views.children[i]
    if ($childView.id !== viewId) {
      $childView.classList.add('hidden')
    }
    else {
      $childView.classList.remove('hidden')
    }
  }
}

window.addEventListener('DOMContentLoaded', function (event) {

  var $catalog = document.querySelector('#catalog')
  var $views = document.querySelector('#views')
  var $details = document.querySelector('#details')

  $catalog.addEventListener('click', function (event) {
    if (event.target.tagName !== 'A') {
      return
    }
    var itemId = event.target.dataset.itemId
    var item = findItem(app.catalog, itemId)
    var $item = renderItemDetails(item)
    $details.appendChild($item)
    showView($views, 'details')
  })

  $details.addEventListener('click', function (event) {
    if (event.target.tagName !== 'BUTTON') {
      return
    }
    console.log(event.target.tagName)
  })

  app.catalog
    .forEach(function (item) {
      $catalog.appendChild(renderListItem(item))
    })
})
