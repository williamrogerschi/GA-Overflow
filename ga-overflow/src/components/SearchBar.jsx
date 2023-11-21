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

<div>

<input
   type="search"
   placeholder="Search here"
   onChange={handleChange}
   value={searchInput} />
   
{/* 
<table>
    <th>Country</th>
    <th>Continent</th>

{groups.map((group, index) => {

<div>
  <tr>
    <td>{group.name}</td>
  </tr>
</div>

})}
</table> */}
</div>

)
}

export default SearchBar