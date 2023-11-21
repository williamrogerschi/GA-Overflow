import React, {useState} from 'react'


const SearchBar = () => {

 const [searchInput, setSearchInput] = useState("");

 const groups = [
    {name: 'coding questions'},
    {name: 'javascript questions'},
    {name: 'debug questions'},
    {name: 'resume help'},
    {name: 'styling tricks'},
    {name: 'html help'}
]

const handleChange = (e) => {
  e.preventDefault()
  setSearchInput(e.target.value)
}

if (searchInput.length > 0) {
    groups.filter((group) => {
    return group.name.match(searchInput)
})
}

return (

<div className='search-bar'>
  <input className='search-input'
    type="search"
    placeholder="Search.."
    onChange={handleChange}
    value={searchInput} />
</div>
)}

export default SearchBar