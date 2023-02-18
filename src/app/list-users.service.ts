import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListUsersService {
  tabUsers = [
    {
      id : 1,
      description : "I can handle myself",
      name : "Mohamed bilel",
      image : 'https://img.freepik.com/vecteurs-premium/homme-bande-dessinee-elegant-ressources-humaines_24877-17816.jpg?size=626&ext=jpg&ga=GA1.1.1374097759.1676735259&semt=ais',
    },
    {
      id : 2,
      description : "I've got enough on my plate as it is, and I...",
      name : "Nidhal",
      image : 'https://img.freepik.com/vecteurs-premium/jeune-homme-avatar-caractere-vector-illustration-design_24877-18514.jpg?size=626&ext=jpg&ga=GA1.1.1374097759.1676735259&semt=ais',
    },
    {
      id : 3,
      description : "I've got enough on my plate as it is, and I...",
      name : "Houssem",
      image : 'https://img.freepik.com/vecteurs-premium/jeune-homme-avatar-caractere-vector-illustration-design_24877-18516.jpg?size=626&ext=jpg&ga=GA1.1.1374097759.1676735259&semt=ais',
    },
    {
      id : 4,
      discription : "I feel the good in you, the conflict...",
      name : "sana",
      image : 'https://img.freepik.com/vecteurs-premium/portrait-femme-3d-avatar-personnage-graphique-rose_541075-1056.jpg?size=626&ext=jpg&ga=GA1.2.1374097759.1676735259&semt=ais',
    },
  ];

  getAllUsers(){
    return this.tabUsers;
  }
  getUsersById(id) {
    return this.tabUsers.find((u) =>u.id == id);
  }
  deleteUser(id){
    this.tabUsers = this.tabUsers.filter((u) => u.id != id)
  }

  constructor() { }
}
