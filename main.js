/* global catalog */

function renderItem(item) {

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
  $item.classList.add('item', 'col-xs-12', 'col-sm-6', 'col-md-4', 'col-lg-3')

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

window.addEventListener('DOMContentLoaded', function (event) {

  var $catalog = document.querySelector('#catalog')

  $catalog.addEventListener('click', function (event) {
    if (event.target.tagName !== 'A') {
      return
    }
    var itemId = event.target.dataset.itemId
    console.log(itemId)
  })

  catalog
    .forEach(function (item) {
      $catalog.appendChild(renderItem(item))
    })
})
