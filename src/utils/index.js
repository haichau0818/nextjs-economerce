export const navOptions = [
    {
      id: "home",
      label: "Home",
      path: "/",
    },
    {
      id: "listing",
      label: "All Products",
      path: "/product/listing/all-products",
    },
    {
      id: "listingMen",
      label: "Men",
      path: "/product/listing/men",
    },
    {
      id: "listingWomen",
      label: "Women",
      path: "/product/listing/women",
    },
    {
      id: "listingKids",
      label: "Kids",
      path: "/product/listing/kids",
    },
  ];
  export const adminNavOptions = [
    {
      id: "adminListing",
      label: "Manage All Products",
      path: "/admin-view/all-products",
    },
    {
      id: "adminNewProduct",
      label: "Add New Product",
      path: "/admin-view/add-product",
    },
  ];

 

  export const registrationFormControls=[
    {
      id:'name',
      type:'text',
      placeholder:'Enter your name',
      label:'Name',
      componentTyle:'input'
    },
    {
      id:'email',
      type:'email',
      placeholder:'Enter your email',
      label:'Email',
      componentTyle:'input'
    },
    {
      id:'password',
      type:'password',
      placeholder:'Enter your password',
      label:'Password',
      componentTyle:'input'
    },
    {
      id:'role',
      type:'',
      placeholder:'',
      label:'Role',
      componentTyle:'select',
      options:[
        {
          id:'admin',
          label:'Admin'
        },
        {
          id:'customer',
          label:'Customer'
        }
      ]
    }
  ]