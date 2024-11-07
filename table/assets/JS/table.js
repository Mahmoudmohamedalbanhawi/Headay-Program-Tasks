let table = document.querySelector("tbody");

let GlobalIndex ;
let ListOfUsers = loadUsersFromLocalStorage() || [{
    UserName:"Bessie Cooper",
    Company:"IBM",
    PhotoProfile:"./assets/img/photoprofile.png",
    Cart:"453€"
},
{
    UserName:"Wade Warren",
    Company:"L'Oréal",
    PhotoProfile:"./assets/img/photoProfil (2).png",
    Cart:"994€"
},
{
    UserName:"Arlene McCoy",
    Company:"Gillette",
    PhotoProfile:"./assets/img/photoProfil (3).png",
    Cart:"429€"
},
{
    UserName:"Jenny Wilson",
    Company:"MasterCard",
    PhotoProfile:"./assets/img/photoProfil (4).png",
    Cart:"826€"
},
{
    UserName:"Kristin Watson",
    Company:"Gillette",
    PhotoProfile:"./assets/img/photoProfil (5).png",
    Cart:"561€"
},
{
    UserName:"Cameron Williamson",
    Company:"Louis Vuitton",
    PhotoProfile:"./assets/img/photoProfil (6).png",
    Cart:"540€"
}];
function SaveUsersToLocalStorage(){
    localStorage.setItem("ListOfUsers", JSON.stringify(ListOfUsers));
}
function loadUsersFromLocalStorage(){
    const storedUsers = localStorage.getItem("ListOfUsers");
    return storedUsers ? JSON.parse(storedUsers) : null;
}


function Display(){
    table.innerHTML = ``;
    ListOfUsers.forEach((user , index)=>{
        let rowtable = `
        <tr>
                <td>    
                    <div class="text-center align-middle">
                        <input class="form-check-input mt-1" type="checkbox" value="" aria-label="Checkbox for following text input">
                      </div>
                </td>
                <td>${user.UserName}</td>
                <td>${user.Company}</td>
                  <td>
                   <img src="${user.PhotoProfile}" alt="Photo-Profile"/>
                </td>
                <td>${user.Cart}</td>
              
                <td class="">
                 
                    <svg onclick="UpdateUser(${index})"  width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.91656 17.75V21.5H7.66656L18.7266 10.44L14.9766 6.69L3.91656 17.75ZM21.6266 7.54C22.0166 7.15 22.0166 6.52 21.6266 6.13L19.2866 3.79C18.8966 3.4 18.2666 3.4 17.8766 3.79L16.0466 5.62L19.7966 9.37L21.6266 7.54Z" fill="#357860"/>
                        </svg>
                        
                   
                </td>
              </tr>
        `;
        table.innerHTML+= rowtable;
    })
}
Display()

function UpdateUser(index){
   
    const user = ListOfUsers[index];

    UserName.value = user.UserName;
    UserCompany.value = user.Company;
    UserCart.value = user.Cart;
    GlobalIndex = index ;
    openPopup();
}

document.getElementById('popupForm').addEventListener('submit', function (event) {
    event.preventDefault();

   SubmitChange();
   
});
function SubmitChange(){
    const name = document.getElementById('inputName').value;
    const company = document.getElementById('inputCompany').value;
    const cart = document.getElementById('inputCart').value;

    if (GlobalIndex !== undefined) {
        ListOfUsers[GlobalIndex].UserName = name;
        ListOfUsers[GlobalIndex].Company = company;
        ListOfUsers[GlobalIndex].Cart = cart;

        console.log('Updated User:', ListOfUsers[GlobalIndex]);

      
        SaveUsersToLocalStorage()

       Display()
    }
    closePopup();
}