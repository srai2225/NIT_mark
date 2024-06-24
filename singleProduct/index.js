import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Home route
app.get("/", (req,res)=>{
  const filteredItems = items.filter((item) => item.rating === 5);
  res.render("homeIndex.ejs", {filteredItems: filteredItems});
});

// TO search particular item by typing item name in the search bar of the navbar
app.post("/searched/data",(req,res)=>{
  const itemName = req.body.searchedItem;
  const foundItem = items.find((item) => item.name === itemName);
  console.log("post" + foundItem.type)
  const itemType = foundItem.type;
  const filteredItems = items.filter((item) => item.type === itemType);
  res.render("index.ejs",{item:foundItem, filteredItems: filteredItems})
})


app.get("/:name",(req,res)=>{
  const name = req.params.name;
  const filteredItems = items.filter((item) => item.type === name);
  res.render("categories.ejs",{filteredItems: filteredItems});
});

app.get("/new/arrival", (req,res)=>{
  const filteredItems = items.filter((item)=> item.offer === "new");
  res.render("newArrival.ejs", {filteredItems: filteredItems});
})

// TO search particular item with the item name adding to the url
app.get("/items/:name", (req, res) => {
    
    const name = req.params.name;
    const foundItem = items.find((item) => item.name === name);
    console.log(foundItem.type)
    const itemType = foundItem.type;
    const filteredItems = items.filter((item) => item.type === itemType);
    res.render("index.ejs", { item: foundItem, filteredItems: filteredItems });
});

// An extra filter get route to see the whole data on the web page
app.get("/filter", (req, res) => {
    const type = req.query.type;
    console.log(type);
    const filteredActivities = items.filter((item) => item.itemType === type);
    res.json(filteredActivities);
});



app.listen(port, () => {
    console.log(`Successfully started server on port ${port}.`);
});

var items = [
    //
    // {
    //     name: "belt",
    //     imageURL: "/assets/images/products/belt.jpg",
    //     type:
    //         "Belt",
    //     description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    //     size: "midium",
    //     price: "Rs.300",
    //     deletedPrice: "Rs.500",
    //     available: 20,
    //     sold: 50,
    //     rating: 4
    // },

    //// started
  
    {
      name: "face serum",
      image2URL: "https://th.bing.com/th/id/OIP.u0U6laOqUEiOSBAeziH9EAHaLH?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      imageURL: "https://th.bing.com/th/id/OIP.wYiu-8Twk9Y81RY_3-iliAHaLH?w=480&h=720&rs=1&pid=ImgDetMain",
      type: "Bodycare",
      shop: "garg",
      description: "Hydrating and rejuvenating face serum for smooth and radiant skin.",
      size: "30ml",
      price: "Rs.500",
      deletedPrice: "Rs.700",
      available: 50,
      sold: 30,
      rating: 3,
      offer:"new"
    },
    {
      name: "hair conditioner",
      imageURL: "https://th.bing.com/th/id/OIP.x1JkSgVuJLYVEIVc5qY4VwHaHv?w=169&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      image2URL: "https://th.bing.com/th/id/OIP.x2tX6aE2NcKTAVRhTcoErwHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain",
      type: "Bodycare",
      shop: "garg",
      description: "Nourishing hair conditioner for smooth and manageable hair.",
      size: "200ml",
      price: "Rs.300",
      deletedPrice: "Rs.400",
      available: 60,
      sold: 40,
      rating: 4,
      offer:"sale"
    },
    
    {
      name: "face scrub",
      image2URL: "https://th.bing.com/th/id/OIP.bKQY8CRaWjl3ti4wHraDlAHaHa?w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      imageURL: "https://th.bing.com/th/id/OIP.CHgmpA7p63yogZgoPCx86AHaHa?w=1500&h=1500&rs=1&pid=ImgDetMain",
      type: "Bodycare",
      shop: "garg",
      description: "Exfoliating face scrub to remove dead skin cells and reveal smoother skin.",
      size: "100g",
      price: "Rs.200",
      deletedPrice: "Rs.250",
      available: 40,
      sold: 20,
      rating: 5,
      offer: "14%"
    },
    {
      name: "face gel",
      imageURL: "https://th.bing.com/th/id/OIP.F7xptZOgxUunzFBNI2LtdQHaHa?w=150&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      image2URL: "https://th.bing.com/th/id/OIP.5CcTvHV3AgBzL_paKr9UsgAAAA?pid=ImgDet&w=166&h=166&c=7&dpr=1.3",
      type: "Bodycare",
      shop: "garg",
      description: "Cooling and hydrating face gel for refreshed and moisturized skin.",
      size: "50g",
      price: "Rs.150",
      deletedPrice: "Rs.200",
      available: 45,
      sold: 25,
      rating: 4,
      offer:"new"
    },
    {
      name: "thermal inner",
      imageURL: "https://th.bing.com/th/id/OIP.Cc2Nt4JmAZY6DQmLeqwPxAAAAA?w=450&h=450&rs=1&pid=ImgDetMain",
      image2URL: "https://th.bing.com/th/id/OIP.RqDellOV0A-LlzKiu6BbGwHaJO?w=135&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      type: "Clothing",
      shop: "kirti",
      description: "Warm and comfortable thermal innerwear for cold weather.",
      size: "Large",
      price: "Rs.350",
      deletedPrice: "Rs.450",
      available: 30,
      sold: 15,
      rating: 5,
      offer:"new"
    },
    {
      name: "toothpaste",
      imageURL: "https://th.bing.com/th/id/OIP.-QonmLE6n4Id-ZG1tGgMOQHaHa?rs=1&pid=ImgDetMain",
      image2URL: "https://th.bing.com/th/id/OIP.-agygLDRBsblIzAvz5siRgAAAA?w=474&h=525&rs=1&pid=ImgDetMain",
      type: "Bodycare",
      shop: "kirti",
      description: "Refreshing toothpaste for clean and healthy teeth.",
      size: "100g",
      price: "Rs.50",
      deletedPrice: "Rs.70",
      available: 100,
      sold: 60,
      rating: 4,
      offer: "sale"
    },
    {
      name: "toothbrush",
      imageURL: "https://th.bing.com/th/id/OIP.nPGcBiMmSBRFk11qF4SqEgHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      image2URL: "https://www.practicon.com/ItemImages/HighRes/71016254.jpg",
      type: "Bodycare",
      shop: "kirti",
      description: "Effective toothbrush for thorough cleaning of teeth and gums.",
      size: "Regular",
      price: "Rs.30",
      deletedPrice: "Rs.40",
      available: 120,
      sold: 80,
      rating: 4.7,
      offer: "sale"
    },
    {
      name: "brown-white bread",
      imageURL: "https://th.bing.com/th/id/OIP.7DMiOxelIV3qRkeuyPKsggHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      image2URL: "https://th.bing.com/th/id/OIP.5lj9Hlba0cB5IUX2oZFF1wHaKM?w=133&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      type: "Snacks",
      shop: "garg",
      description: "Freshly baked bread, perfect for sandwiches or to enjoy with spreads.",
      size: "Regular",
      price: "Rs.40",
      deletedPrice: "Rs.60",
      available: 50,
      sold: 30,
      rating: 4.4,
      offer: "sale"
    },
    {
      name: "trimmer",
      imageURL: "https://th.bing.com/th/id/OIP.S4QeZbFBSMzyvmjPh2eKZwHaHa?w=217&h=217&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      image2URL: "https://th.bing.com/th/id/OIP.qoOfICt9tPc6NcccWrvj4wHaIq?pid=ImgDet&w=166&h=194&c=7&dpr=1.3",
      type: "Bodycare",
      shop: "kirti",
      description: "High-quality trimmer for precise grooming and styling.",
      size: "Standard",
      price: "Rs.500",
      deletedPrice: "Rs.700",
      available: 40,
      sold: 20,
      rating: 5,
      offer: "23%"
    },
    {
      name: "aloo bhujiya",
      imageURL: "https://n1.sdlcdn.com/imgs/e/q/9/Haldiram-s-Aloo-Namkeen-Bhujia-SDL057242591-1-87856.jpg",
      image2URL: "https://th.bing.com/th/id/OIP.TJsIXHwUQ8Fpewa3DLLbNAHaKa?pid=ImgDet&w=166&h=232&c=7&dpr=1.3",
      type: "Snacks",
      shop: "garg",
      description: "Spicy and crunchy aloo bhujiya for a flavorful snack.",
      size: "200g",
      price: "Rs.50",
      deletedPrice: "Rs.70",
      available: 70,
      sold: 40,
      rating: 4.2,
      offer: "10%"
    },
    
    {
      name: "tiger crunch biscuits",
      imageURL: "https://th.bing.com/th?id=OIP.iJHR-aRQLRaWad6ckIGS7gHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      image2URL: "https://th.bing.com/th/id/OIP.ICMzxt4zVPMaVpTW14moZwAAAA?pid=ImgDet&w=176&h=177&c=7&dpr=1.3",
      type: "Snacks",
      shop: "garg",
      description: "Crunchy biscuits with a delightful tiger design, perfect for snacking.",
      size: "100g",
      price: "Rs.20",
      deletedPrice: "Rs.30",
      available: 120,
      sold: 80,
      rating: 4.5,
      offer: "new"
    },
    {
      name: "crack jack biscuits",
      imageURL: "https://th.bing.com/th/id/OIP.e7aS2MvBM6JFIAX_zBEt1wHaGS?w=189&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      image2URL: "https://th.bing.com/th/id/OIP.SracWCwVZ5HEb3Dak21ktgHaHa?w=160&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      type: "Snacks",
      shop: "shop1",
      description: "Classic crack jack biscuits with a sweet and salty taste, perfect for tea time.",
      size: "200g",
      price: "Rs.30",
      deletedPrice: "Rs.40",
      available: 100,
      sold: 60,
      rating: 4.4,
      offer: "new"
    },
    {
      name: "scissor",
      imageURL: "https://th.bing.com/th?id=OIP.x6A0g_neoSw0Toysag9whAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      image2URL: "https://img2.exportersindia.com/product_images/bc-full/2021/12/8507645/scissor-1639386895-6114719.jpeg",
      type: "Stationery",
      shop: "shop1",
      description: "Sharp and durable scissor for cutting paper and other materials.",
      size: "Standard",
      price: "Rs.50",
      deletedPrice: "Rs.60",
      available: 80,
      sold: 50,
      rating: 5,
      offer: "15%"
    },
      ////////////
      {
        name: "rough registers",
        imageURL: "data:image/jpeg;base64,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",
        image2URL: "https://th.bing.com/th/id/OIP.0Wik7_3UgJDOKlKjHvoE8gHaHa?pid=ImgDet&w=166&h=166&c=7&dpr=1.3",
        type: "Stationery",
        shop:"shop1",
        description: "Rough registers for jotting down quick notes and calculations.",
        size: "A4",
        price: "Rs.20",
        deletedPrice: "Rs.30",
        available: 150,
        sold: 100,
        rating: 4,
        offer: "10%"
      },
      
      {
        name: "notebooks",
        imageURL: "data:image/jpeg;base64,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",
        image2URL: "https://th.bing.com/th/id/OIP.nbA6E3SyrnixS_GrP6_VuAHaHa?pid=ImgDet&w=166&h=166&c=7&dpr=1.3",
        type: "Stationery",
        shop:"shop1",
        description: "High-quality notebooks for writing, sketching, and note-taking.",
        size: "A5",
        price: "Rs.30",
        deletedPrice: "Rs.40",
        available: 120,
        sold: 80,
        rating: 5,
        offer: "12%"
      },
      
      {
        name: "pen",
        imageURL: "data:image/jpeg;base64,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",
        image2URL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCADxAPEDASIAAhEBAxEB/8QAHAABAQACAwEBAAAAAAAAAAAAAAEDBwQFBgII/8QAQBAAAgIBAgUBBAYIAwgDAAAAAQIAAwQFEQYSITFBEyIyUXEUQlJhgbEHFSMkMzRDYpGh8BYlRFNywdHhY3OC/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAhEQEBAAIBAwUBAAAAAAAAAAAAAQIRMQMSISIyQUJRYf/aAAwDAQACEQMRAD8A23ESwJERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARLJAsRECREQEREBERAREQEREBERAREQEREBERAREQEREBERARPl3rrV3sYKiDdmY7Ko+JM8ZqXFmq5t+RpvB+nNqOVS5pyc99l07FcbbqbWIVmHwB/x7QluntYnjOEczjF8jPx9eyMXKp3LYd9C7MxXbmZSqIDUey7rudtx7JBPs4SXZERDSxEQJERAREQEREBERAREQEREBERAREQEREBERAREQEwZWVj4dTW3tsvuoo2L2PsSEQeT0J/AnoBuOJrOs6domG2XmO3UlMemvY3ZFu2/JUpIH3kkgAdSQBvNb15Wu8X5f78GGBlB3xNOwmaq3MxVIVqzkEbpi7/xrSAXI5VB2C11m38dhmavqHFOViUY9jY+hJnLzXopt/WV+Owf6Ni1gb2KCN7G25em3RQWbuVuytPo5VN7aZmpde9GoFW1HFuZiGQtQXDpZsWPteyPJU8tfMTGxtMqFa+k2W1C0WWU1iurHxl7Y2JXueSseBvue5JPWfen4jZlvr2b+iu3Lv5+H/qVxyvntnLnaTjMlb5NnW3I2IPQ7J42InaSKqoqqoCqoCqqjYAAbAACWZdsce2aIiIaWIiBIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICdVrmuafoWIcnKJaywsmJjIyi3JtA35U5ugA7ux6AdT991zW8DQsJsvJJd3Pp4mPWQLcq7bcVpv028sewHXxNNtbrnGWsKzIuTblM1dVfM6Yvo1PuQGHtLiVnY2N71jbAdT+yJa51J1njDVlvvrTJe5ScfHY2LhjGV9uazbZ1xEI67bNaw2GwBNGzMTCw9AxbQjm/NySjZmVaqrbk2IvKo2Qcqoo6VooCqOgHx+tL0vA4c09q0f1MiwLZmZToq2ZNwXlB5V6BV92tB0UAAfE8Njkahkco32J2P3Dvyg/H4n/R1HLPLt8Tkx6bs+/r1r5iXY9j8fw/18vS1VpUiog2Vf8/vMx4uPXjVCtQN+nMQO52/L4TPJbtenh2+byRESOpERAsRECREQEREBERAREQEREBERAREQEREBERATrdZ1nT9Dwbc3NZuUEV0U17G7JvbflppXyx/yG5OwG4+9V1XA0fCvzs6wrVXsqKg5rb7W6JTSncu3YD8gNxpzKytR4xz9Q1LU8hsLQ9Krc6hfUQ1eBjMR+5YZI2a+zoHbbqTsBygLbUtYMzL1fi3PfMya7Lqrbxp+LjYjbfSLTtYNOwnboFA2fJt26Ab9iqvtjQNDxOHMF3uNLZ16Vtm3VLy1jkGyY+Op6ipOyDz1J6tOp0LCp0tKNQycOvHz8jGanRdJU7LpOlghuWwtueZiefJsPUs3L1J5W51+Tk5bLXz83LsWbl5VH93KN/8A8jf/ABPWWTbnllMJ/X3kZF2ddyruF5ugH1Qenb7R8f627vCw0xax0HqEdfPKO+wP5zFp+CuOi2Ou1h6qG7rv3Zv7j/l2nYRanTw+2XJERMuxERAskskCxEQJERAREQEREBERAREQEREBERAREQE4epalgaTh5GfnWivHoUEnbd3Y9FrrXuWY9AJly8zDwMbIy8u5KcbHra26xzsFRRuT8fl/7ml9R1PXOPdex9PwuamoM30etuo0/E5uWzLuUHb1SCAevTflHUkis2/DNbZr/wCkPXTj1FsfExelzg81Ol4rnYoCOjZFmxDHfxsNlUmd6/6uqs07A0nFWzSdHvtTSMRtxXq2r0EJdqOZZtucfHPQsB7T9BvsFna52FVw/oa8McMKo1LJpNltjW+nbXQ3s3Z2Veo9ln29Os9DufZG1R5MGHhjHVa15GvaqmuxlXkrSqleVKql68tSDcIu57kkszlnsm3PPOYT+s1CZG9nqXtk5uQUfOy7VCGwoNh7C+ytabn00HQbk9WYs3pNOwFpVbLFO/vIre9v9t/v+Hw/L507TlqVLLR13DKrDqW8O4/IePn27aLUwwt9WRERMu5ERAREQEREBEsQJESwJERAREQEREBERAREQEREBMGVl4mFRdk5d9VGPUA1ltzBEQEhRuxjKysTCx8jLy7kpxsdDZdbYdlRR/38AefxmhuMOL83ijL9DH56dIxnJopY7Gwjp61+3TmPgeB8yWqW6d3xRxHn8U6viaLoyWW4vr8uLWn/ABlqBv3q7fbape6AnsCx23E7b08fRKs3hrhF621m30f9odZbflxebdWCMu4DjryoCOXc7e1uV8LpOsZGgV6mmFZRj5OdVRhnNfGZ8nFqLBrHqYHmHnpynflB6EDbYWj4OFh4VGNptnrVW/vVmWzcxyntA3vsbc9W6bD8O4JOtOGWcxm5yz4ePVp9ZxsbdzkWC3KyLAotvyWAQ3XlenXx4G+w97c+r07TVoUWWjew7NsfB8Fh+Q8fOTS9OFCLbcv7Q+0oYdR8Cw+PwHj59u2kt/F6eH2yIiJl3IiICIiAiIgWSWSBYiIEiIgIiICIiAiIgIiICIiAmLIycbEovycm1KsehDZdZYdlRB3JMt19GNVdfkWpVTSjWW2WEKiIo3LMTNF8Z8ZZPEmScDBL1aRRYeReobJdT/GtHw+yPHz7VLdMXGXGGXxNlHExS9OkY7k1Vk7NcR09e4fkPHzM6PEprUsDbXSlVb3W2WjfkRRsDyA8xckgIo+PXbYlfrDxqAdrLq6aq9nyciwMy0qOvRV6s568i7jc/AAleJkZVuWuLQqAUY3OtCInt2WXNu9tgG+9j9AfkAOiy8OXufV2VfnHEpSrlrq5asfHoUsz3WcoZztuzWOdt/wA2CgDeHA3DmdoelqNSfmyL7fpK4u6smCGHVFYd2PduuwPbyW63gTgcaSlOr6tSDqli741D7EYKMO5H/NPn4du+82FJtuYkREjZERAREQEREBERAREQLERAkREBERAREQEREBERAT4ssqprsttdK6qlayx7GCoiKNyzMegA8yu9dau9jKiIrO7OQqoqjcsxPQAeZpHjrji3W7X0fSHZdLR9rrV3Vs11O4J8isfVHnufAWpbpi4341yOIMhtM0t3TSqn2JG6tmOp/iOD9UfVH4nr0TzeJjVKQHurpQEfSMmxXauleVn3IUbljseRe7EfMrjxsYKD7QQAp6+RYthqoV99mtZFJ26HYdyRsOvbFmZYuH0bHa1dPpvtvpW7kFtjvspuv8AT9nmIAAH1R0HktXL3Ll5n0gLj086YFFtr0o/L6ljOx/bZHJ0NhGy9OwAA6DrtjgLgYYAx9b1in9+YCzAxbB/JqR0ttU/1D4H1fn7vG4B4FNX0bXdao2tHLbpuHav8LyuRep+t9geO/f3dpSNyEREjZERAREQEREBERAREQLJEQLERAkREBERAREQEREBIzKoZmKqqgszMQAAOpJJ8QSB8Jpvj7jps9rtD0W39zBKZmTU380w6Gqsj+mPJ8/L3yW6YOPeOX1Z7dF0ewjTkblyb0OxzGU9h/8AGPHx79p4vFxmC2MB1RFsutZGavHqLrWbbuXchQSPHXsOpkxMSxi5VOdhVZe/MQqLVWOZndj0Cjz9+wG5IDXNy0cPh4dlhwQaWsZ/ZOVfShX13U9QOrci79AfiSTpz5fOZlLa1+LiPaNOGT69Yu5fUtdKxULriB323KjfZeYgdyW2TwBwLz/Rtd1qn9mCt2m4dq+95XJvU+PKKR958TjcAcDfTDj65rFP7mpW3T8S1f5ojqt9yn+mPqjz3PQe3uKRuQiIkaIiICIiAiIgIiICIiAiIgIiIFiSICIiAiIgIiICImp+P+PNvpGhaJduTzVahl1N38NRSw8eGP4fHclumH9IHHfrevoWiXb1bmrUMuo/xvBopYfV8MfPYdPf13hYV1rgKgawrZYedlRFSteZmsschQo7sSf/AAZg4V2Tairyc78zM1rrXVXWnV3ssboqr9Yn5dSdiyctHqrxcVAq8pXKuG/PluXV9uoBFa8q8i7eNz1bZdMXy+8vLqdfo2EbFoaukZVjMwbMsrJcMU7KikkIv3bncn2fb8BcDfrRqdY1er/diMHxMewfzzqffcH+kPH2vl72HgTgdtZevVNUrI0itt6am3Bz3U9v/qB7nz2HTczdqIqKiIqqiqFVVACqoGwAA6bCTayKoAAAAAA2AHQADwBLESNkREBERAREQEREBERAREQEREBERAsRECREQEREBETqNe1rD0PT8jMybAgrTcbdWJPQBB9onov+PYQlupt5/wDSHr1mm6LkY+HmJj5eQ61FuvqNUd+eupl6hu25+Y6E7rpHExXuurUsqPZYlZe4lUrLEAlz32HdvuHxnM1HWMrWtTGoZyh0D74+IeY1rWG9lX267Hpv5P4zvcrhnVtTxbc621Rqt1puXFKJUtlZGy1vyeyLO2w7D3SfK6kc7de55rLysX0bcTDNliWZHPZkXVrU9lVXMlNaIrNsvUs3XqSPsAn1fAvBNmu3JqGoIyaNQ/UdVbOsU9akPfkH1z+A8lcfBvA+ZruW12oVXY2mYlzV5XOrV233Idmx6wdiNuznx279t7UUUY1NOPj1pVRSi1VV1qFREUbBVA8CRqTa111VV11VIlddaLXWlahURFGwVVHQAeJ9xEjZERAREQEREBERAREQEREBERAREQERECxEQJERAREQMd91dFVlthARFJO5A/Dcz8+8ZcSWcR6m1VVh/VmJaRUU3Pr2e4bQv+SD4dfJns/0m8T+kh0DDt5XsQNqNin+HS46Vj+5/wAv+uea4W4auNlOZkUMbzscTHZTvUD2stH2z4Hj5+5qRzyyk9Vcjh/h5cZq8vJr3yCQ2PSw39I/bf8Av+Hw+fu7H0vRXs5bsjdEI3BHRmHwTfsPv/w+M5ml6FXjBbcoB7SAQh6qv/V/4/Od7FvxHPHp3K92b4rrrqRK61Cog5VVewE+4iZegiIgIiICIiAiIgIiICIiAiIgIiICIiBZJZIFiIgSIiAnUcQ61RoemZmYw9S9abDi0KCWtsAHXZevKNwWP/cgHt5wbtK0/JzsXUMis25GJUa8UWsWqoLNzNZXX7vOem5+4dvJK1Tw7wlq2sZjazqqP6l1zZKC8bBHbr6tm49/7IAPL0+HsbW0/TMTT6wKl3sI9qwjqfiB8BObsB0Esu2Zh53SIiRsiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIFiSICWSICIiAlkiAiIgIiICIiAlkiAiIgWSIgIiICIiAiIgWSIgIiIFklkgWIiBIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgWIiB//Z",
        type: "Stationery",
        shop:"shop1",
        description: "Smooth-writing pen for everyday use.",
        size: "Standard",
        price: "Rs.10",
        deletedPrice: "Rs.15",
        available: 200,
        sold: 150,
        rating: 4,
        offer: ""
      },
      
      {
        name: "pencil",
        imageURL: "https://th.bing.com/th/id/OIP.NIZCy5T1C2iUKGkZCgDorAAAAA?w=134&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        image2URL: "https://th.bing.com/th/id/OIP.DxkF9kZq5-5h3C_NAGgLegHaE8?w=255&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        type: "Stationery",
        shop:"shop1",
        description: "Wooden pencil for writing and drawing.",
        size: "Standard",
        price: "Rs.5",
        deletedPrice: "Rs.10",
        available: 300,
        sold: 200,
        rating: 4,
        offer: ""
      },
      
      {
        name: "stapler",
        imageURL: "https://th.bing.com/th/id/OIP.WNejsStD5wnZHWWyNcSrlwHaHa?w=206&h=206&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        image2URL: "https://th.bing.com/th/id/OIP.p3rVgpm0sot_c9IFFQy7CAHaHa?w=161&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        type: "Stationery",
        shop:"shop1",
        description: "Handheld stapler for stapling papers together.",
        size: "Standard",
        price: "Rs.50",
        deletedPrice: "Rs.60",
        available: 100,
        sold: 70,
        rating: 5,
        offer: "sale"
      }
      ,
      {
        name: "file",
        imageURL: "https://th.bing.com/th/id/OIP.PK-zncWkPWVnVhZeLF_oAwHaHa?w=162&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        image2URL: "https://th.bing.com/th/id/OIP.gb8fzDdNAssphGLl25QflwHaHa?w=162&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        type: "Stationery",
        shop:"shop1",
        description: "Durable file for organizing and storing documents.",
        size: "A4",
        price: "Rs.20",
        deletedPrice: "Rs.30",
        available: 150,
        sold: 100,
        rating: 4,
        offer: "11%"
      },
      
      {
        name: "tape",
        image2URL: "https://th.bing.com/th/id/OIP.dffKbXFivw_AltHSYRc99QHaG-?w=184&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        imageURL: "data:image/jpeg;base64,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",
        type: "Stationery",
        shop:"shop1",
        description: "Adhesive tape for sealing packages and fixing things.",
        size: "Standard",
        price: "Rs.10",
        deletedPrice: "Rs.15",
        available: 200,
        sold: 150,
        rating: 4,
        offer: ""
      },
      
      {
        name: "hair oil",
        imageURL: "https://th.bing.com/th/id/OIP.UiVS_FrebqbSaPq_ho-EBgHaHa?w=189&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        image2URL: "https://th.bing.com/th/id/OIP.qHKG4molWERlMpZHck3AqgHaHa?w=161&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        type: "Bodycare",
        shop: "shop2",
        description: "Nourishing hair oil for healthy and shiny hair.",
        size: "100ml",
        price: "Rs.150",
        deletedPrice: "Rs.200",
        available: 80,
        sold: 50,
        rating: 5,
        offer: "30%"
    },
    {
        name: "lays chips",
        imageURL: "https://th.bing.com/th/id/OIP.jhzlYhfOUN9Cc5pIqXiIagHaHa?w=199&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        image2URL: "https://th.bing.com/th/id/OIP.lfgDgD5TFDcoYYx6LXQdFQHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        type: "Snacks",
        shop: "shop2",
        description: "Crispy and flavorful lays chips for snacking anytime.",
        size: "Regular",
        price: "Rs.70",
        deletedPrice: "Rs.100",
        available: 100,
        sold: 70,
        rating: 4,
        offer: "sale"
    },
    {
        name: "jockey underwear men",
        imageURL: "https://th.bing.com/th/id/OIP.Zm_J7j0sRqySyGYrRuaK_wHaJ4?w=138&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        image2URL: "https://th.bing.com/th?q=Jockey+Underwear+Sizes&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
        type: "Clothing",
        shop: "shop2",
        description: "Comfortable and supportive underwear for men by Jockey.",
        size: "Medium",
        price: "Rs.300",
        deletedPrice: "Rs.400",
        available: 50,
        sold: 30,
        rating: 4,
        offer: "35%"
    },
    
    {
        name: "jockey vest",
        imageURL: "https://th.bing.com/th/id/OIP.CUTSo-QN8MjVaZ2L-ZxAjQHaJl?w=186&h=241&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        image2URL: "https://th.bing.com/th/id/OIP.7sSGj1ZDkGoMW8YBzBK2RwAAAA?w=186&h=248&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        type: "Clothing",
        shop: "shop2",
        description: "Comfortable and stylish vest for men by Jockey.",
        size: "Large",
        price: "Rs.200",
        deletedPrice: "Rs.250",
        available: 60,
        sold: 40,
        rating: 4,
        offer: "20%"
    },
    {
        name: "jockey shorts",
        imageURL: "https://th.bing.com/th/id/OIP.Uhy_Rs9F1BG1_gJyo6GR2QHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        image2URL: "https://th.bing.com/th/id/OIP.QoskGlBp3R-aJDRvH0cmaAHaHa?pid=ImgDet&w=166&h=166&c=7&dpr=1.3",
        type: "Clothing",
        shop: "shop2",
        description: "Comfortable and breathable shorts for men by Jockey.",
        size: "Large",
        price: "Rs.250",
        deletedPrice: "Rs.300",
        available: 40,
        sold: 20,
        rating: 5,
        offer: "22%"
    },

    {
      name: "socks",
      imageURL: "https://th.bing.com/th/id/OIP.OP0XBAEn7k5rDHLUR8ajRgHaHa?w=183&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      image2URL: "https://th.bing.com/th/id/OIP.STjqvY5faUEH0M4mqqwR0wHaHa?pid=ImgDet&w=166&h=166&c=7&dpr=1.3",
      type: "Clothing",
      shop: "shop3",
      description: "Comfortable and stylish socks for everyday wear.",
      size: "One Size",
      price: "Rs.100",
      deletedPrice: "Rs.150",
      available: 100,
      sold: 50,
      rating: 5,
      offer: "new"
      },
      {
      name: "goodday biscuit",
      imageURL: "https://th.bing.com/th/id/OIP.sX9khdG82TDsx5b3yvw-vAHaHa?w=165&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      image2URL: "https://th.bing.com/th/id/OIP.sX9khdG82TDsx5b3yvw-vAHaHa?w=165&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      type: "Snacks",
      shop: "shop3",
      description: "Delicious biscuits perfect for snacking, made with high-quality ingredients.",
      size: "100g",
      price: "Rs.20",
      deletedPrice: "Rs.30",
      available: 200,
      sold: 150,
      rating: 3,
      offer: ""
      },
      {
      name: "himalaya face wash",
      imageURL: "https://th.bing.com/th/id/OIP.EugVR-vamHLXa2p0auPpzAHaHa?w=181&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      image2URL: "https://th.bing.com/th/id/OIP.Nw6ip4f5TMR6BwzLEns-IwHaHa?w=181&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      type: "Bodycare",
      shop: "shop3",
      description: "Refreshing face wash for clean and radiant skin by Himalaya.",
      size: "150ml",
      price: "Rs.120",
      deletedPrice: "Rs.150",
      available: 80,
      sold: 60,
      rating: 4,
      offer: "23%"
      },
      {
      name: "peanut butter",
      imageURL: "https://th.bing.com/th/id/OIP.npLjoVSRBmEHgraaI_97PQHaHa?w=214&h=214&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      image2URL: "https://th.bing.com/th/id/OIP.ZjuMR4zLUOmIM4cyXmvJoAHaE8?w=258&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      type: "Snacks",
      shop: "shop3",
      description: "Creamy and delicious peanut butter made from high-quality peanuts.",
      size: "500g",
      price: "Rs.250",
      deletedPrice: "Rs.300",
      available: 30,
      sold: 20,
      rating: 5,
      offer: "25%"
      },
      {
      name: "mattress",
      imageURL: "https://th.bing.com/th/id/OIP.apuwfoFe_hJ8X5YsPSsfAQHaHa?w=211&h=211&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      image2URL: "https://th.bing.com/th/id/OIP.FEhpXTbmelIf-pLvKUH3gQAAAA?pid=ImgDet&w=166&h=166&c=7&dpr=1.3",
      type: "bed",
      shop: "shop3",
      description: "Comfortable and supportive mattress for a good night's sleep.",
      size: "Queen",
      price: "Rs.5000",
      deletedPrice: "Rs.7000",
      available: 20,
      sold: 10,
      rating: 5,
      offer: "30%"
      },
      
      
      
      
      
      
      ///////
      
      {
        name: "usb",
        imageURL: "data:image/jpeg;base64,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",
        image2URL: "https://th.bing.com/th/id/OIP.ckycJd7j70Ud9wF4qtbyBQHaFV?w=265&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        type: "Electronics",
        shop:"shop3",
        description: "High-speed USB flash drive for storing and transferring files.",
        size: "16GB",
        price: "Rs.200",
        deletedPrice: "Rs.250",
        available: 100,
        sold: 80,
        rating: 3,
        offer: "sale"
      },
      {
        name: "adapter",
        imageURL: "https://th.bing.com/th/id/OIP.9LbAL-9cxaQFMuKXbwBk-gHaHa?w=161&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        image2URL: "https://th.bing.com/th/id/OIP.7vENqGFrOkuqEt7yP8QBvQHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        type: "Electronics",
        shop:"shop3",
        description: "Universal adapter for charging multiple devices simultaneously.",
        size: "Standard",
        price: "Rs.300",
        deletedPrice: "Rs.350",
        available: 50,
        sold: 30,
        rating: 4.4,
        offer: "23%"
      },
      
      {
        name: "converter",
        imageURL: "https://th.bing.com/th/id/OIP.V3BhvsUAvFoiRfO-kP7t6gHaHa?w=185&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        image2URL: "https://th.bing.com/th/id/OIP.4BbWsy6gDamAEx_cO8FMfAHaHa?w=163&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        type: "Electronics",
        shop:"shop3",
        description: "Voltage converter for international travel.",
        size: "Standard",
        price: "Rs.400",
        deletedPrice: "Rs.450",
        available: 40,
        sold: 20,
        rating: 4.3,
        offer: "20%"
      },
      {
        name: "coffee mug",
        image2URL: "https://th.bing.com/th/id/OIP.75ESJg23LCa7s6JBRe0ZtwHaG-?w=211&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        imageURL: "https://s3.distributorcentral.com/uploads/4/4/445EB528228592D6BE4A439786E4087C.jpg",
        type: "Snacks",
        shop: "kirti",
        description: "Stylish and durable coffee mug for enjoying your favorite beverages.",
        size: "Standard",
        price: "Rs.100",
        deletedPrice: "Rs.150",
        available: 80,
        sold: 50,
        rating: 5,
        offer:"sale"
      },
      
      
      {
        name: "extension board",
        imageURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCADqAMQDASIAAhEBAxEB/8QAGwABAAMBAQEBAAAAAAAAAAAAAAIDBAEFBgf/xAA9EAACAgEDAgQCBwcCBQUAAAABAgADEQQSITFBBRNRYSJxBhQycoGR8CNCUqGxwdEzYhWCouHxFiQlNJL/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACQRAQEBAAEEAgICAwAAAAAAAAABEQISITFBBBMDIjJhI0JR/9oADAMBAAIRAxEAPwD9biIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgInCwEgX+QHqTAsiVe/950OR1gWROAgzsBERAREQEREBERAREQEREBERAREQEThIEiWPaB1nVQSewJOOs8fxDxpdK/koqhygffqG2VlO5THJx3OeJ6mRnGRn5zB4h4V4f4jUKtVp67VVmesPkNW5GN9Tr8St7gyctzs6/j6Jy3nOzz9F9KPDtbr6NBWh32rcBcHU1m1BvCKCA3IyQcdse89jUac6hQFsNbKchgAwPzH/eeJ4X9FvCfDbfPrrssvV91d2sZLHqxnHkqoCAjON2M+8+gAKAAEke55/OY47Z+zp+f6ur/Duf2wLbq9GxW9C9TFiLKwWUADq2BxN/mVlBZkbCAwJ9DMXifiuk8K0tup1HnBFV8eXU9h3BSwXCj27kCS0GtbXadL2otRLFDV+aoU2oy53BD8QB9wPl66lkuOWWzV31zTC40CweYOoBz+E1K4PcemR6zDTodDpbNRdXSlb3sHsKkksQMYy2cD2GBLS+4qq8DcuPzlm+2bJ6bIiJWSIiAiIgIiICIiAiIgInCwEiWJ+UCRIE8nxPxcaCoWGvahO0328U1NnAV8cgntnA988T0C6ZIJGe8q1Gno1Nb12ojo6lXV1V0deu11YEEfMSXfTfHJZ1d4+St+m1OmeukrXqMWp9Yv+KoV1BsWEKBglRyOg4n2SOrqGBBDAMCpyCDyCpHY9p89R9FPAqdY2qGiViMGuuxy+lqbGC1dDDr7EkDtifQBAvQnIGAfT2x0xMcOr/Z6PkcvwXPpln/Xz/iXg/ja6qzxLwXxK0W2W0Pd4drXH1G1EwGFbBC6MR06j+3saHUau+ndqtJZpb1ZlsqYq65BP+m68EHscD8Ogvsa1UsKIGsCsa1LBVdscDcek8/w1fHgLH8TOhrLXWslOjNtuyvgIpssAyepPH/a5l7OG2zusHiukfVDRVCyzUAsLFRGxXs+1vcjbx35m/Izg9ZAIu9rNqK7Kqs+1fMZR0BPXA7TjOiZxyfXPWWb7Z7ek2CEHPSVtYo4X8T7yprC3UyOZVxIsTnPM7Xy9f3hIZkq9xdNoOcg/gO8D0IiJWCIiAiIgIiICJwsBIFz8h+GYEyQJ53iPif1GhrvKJRSwssb/SoHZ7dvxYPqBj1I76ywzjPMhbVXcjI6hlZGRgwBDKwwVYHgg9xJW+OS94+R1H0wfSrZtWnV3OrGpDmpEcjKrvQHj8D16z6rR6unXaXS6uhg1WoqS6sjB4YA4OO46H3E8Jvoj4C2r+sNpTsxn6stmzRFwc7vKUbvw3Y9p9BVRXSiJWqqqLtRa1VEQeiovAE58Ovf2er5HL4/KT6ZZfbx/H/A9Z4n5Wq0Hius0HiGkovTS+VZjS2M5DY1CYJwSACR6d8S/wAH1PjTI+m8W0XkajTJSvnVWC7TakbADZXYFXnOcqV4+XM9UkjqOe3YH2nj6VvpPZrdW+qo0Gn8PJpGnQXWWarAVjYz4XZnOAOR/nV7Xs827MaNZ4xoNFalFrMdTYQtVFSGy1y32cKvr25m9WO0Fl2kjkEgkflINVTY9VrVVtZVv8qx1UtXvADbCRnnvJFkTk8n+ks3e6XPSw+8rL1pnHJlL3E9JQWJ5l0kXPazcDgSsn1lZYSJczOtYs3ToOZGtS/rgdcesvCqvIUEj8/yMsSu1UvZ7L6n+02V1pWMKPmT1PzmDzLGZHrtBr3EWBuox1xjv7TdUxZAx7k49x6ys1ZERKyREQESJZV69fSQLk57QJtYiAs7KoHUsQAOcd5lfWISwqBfYxFjBlVK8ddzvx+uvrntoc2ozi2+uy8nbuRU06bcbju5PpgEcevfroq1aiu9V1NFln7OkUoqV18ba2GecYzk/wBpHTOM/ts6gkHmcBz+ukzBnNm5bVFSgrt2japHTcQfyl4IY8DDdwehHqJWHzf0m8J+keo/+Q8A8Tu0+t09BRdGAgp1WWBILOwQHvypzjqM5HoeC+KajXpqaNZotTo9boWrp1FWoUfH+zVvNRl+Eq3OMHt7T07bVqrttZXIqRnZa0LucDOFVeSfSeZoNf4zqtRel/hF+l0gKnT33X0NvUruO5FbcD0HAI688ZPPtOTptvFr1XiXh+j/APsXoj87UOTY3yRAX+XE1o+5FbBG4A4YYI+YMyvoPD7NXVrW01baqo5W3GPiA2hjjgkDgEg47Ymo7Ryxz7dpqbvdm56T4MgfLXrzjoD2lT3dhKCxPUy2ki57s5x0lDMT3kSQJWzzOtSJlhIF5At0ltdLNy52A9B+8fzhVeScAZyegAyT+Eur07H7ZwP4QRuPzMuFVK4AQZ/3dT/zCdJ6+ncHkrGM66AqjCqMDtjBEiSDjng/ZPcGcJPTuASp9R6SJbJX4Tizd06KwGeZRzA3M4GGOFtHZsdDj1m7SvuTaSSVJHI5x2nn7m80HA2PSS3s6sMf1P5T0qakrUEA7mVd2T7dJYzVsRErIcAZJ4nm6/xXTaFKy+4tazpUB8IZkGSDY3wj5dT2HHGzUEhUP+7n8pg1mj0+v01+nuXdVeoWxQxUnBBDKy8hh1BEl306cOnqnV4eK30pTTG59VSroVZ6q9KwN2R0XFrAHPqSvyPSfRafUU6rT0amlt9N9Nd1RA6o6hhxPif/AEU9ussNniVn1EEOiKmdbuJ5V3b9nx/FtJPoOp+w8P0On8P01Gk0ylNPSrCtGd7G+JixJZyT1JM58Lyv8nr+TPjyT6b39u2mw8nKKSAiZBdvchc4/n/iprLCS+4uyqyirKANxnktxj15/nNjV1Nu3Ip3Y3ZH2tvQHHaZ2pcfGWClmG8UVufQYUZz+J49p1eJJAqjhNgI3dD8HHJA7j9e8jYtpKPW1hKAmtc4RsjqCQT+u4lNhsNipWbWelwRUj52jA5uYgKCfTP+Bo+rlsnUPuXOVrr3JXn+JsHJJ/L2gTot80YbAtRRvKZKbvQNjEtOByxlZdKwFRQqgYAAAA+QEpawmTVkXvaAMCUM5PUyBYCVl5nVkxYSBIMwlZbMKrt9lSffHw/nDQWz/OdWtrDxwP4m4H4CXV6dR8Tnd8uQPwlxC8DAx2K9D7YjE1CumurnJLHncwB/pJOCc4wGHI7g/nK1sHrlGyM+hHBB/X9OZHPK9wNyn1ErLqsCo9Ccfdb05jOOf4eG+R7yPBPtYDkejAfr8pxd1h2quWZCCB6juZQJ2gj+BgR909pJKLbjlQFUOzBmB4JGOBNNekXrbhjhfh/dGP6zVJiaoq0tVe0n43AxuPT8B0l8RNMkRECjU/6Y9mH95kViJr1RAq+bCYgwxI1GhSD85OZVbHOZcH9f5QYtnCQJUbAP1mVmxmIA6k4HzjTFzWgZxKGtJM+I8U+m5XVX6LwPRpr2oYpqNXe7LpQw6iray5HuW57DHJ9fwPxm3xjSvY2lenVUWmjVVKGetbMBw1dnQqQQRz7duc9U3Ndfq5Tj12dntl8ZlZskWr1TZxWfxIH9TOCnUpliisVBKrvXkwybmY8An0wDJrTa2M4XPr1/KK9awYpfU1QBAyzKyn/89JrJGPVT/wBPuDENqtKUQ8jcw6g8EfIGW5Xr29cYK/OQZiAwOdyKWUgcsPl/WA6socdCBuB7fOWIkc54+2OQem4e8iWB+6/B7Yac5+JP3kwyn1H64nCR8foy7h94QOMeVUgfEWUnp8Q5BjOAmftI238DOim64goOjKxZsgdJuq01dZLH42JzlgMA+wjEtxnq01j4L5RAxOCPiYEfymyutKlCIMAe5J/EnmTiVnSIiVCIiAiIgZ9WQKwvdmH8uZ57JYhRznbauQMcDBI6+p6zdrAdtR92H5iTrVLdPWrAEbAp9iOJK1LjzwZaDxI20tS3qp+y3r7H3kc8SNDMBmeT4z/xG7w3xPT+HAtrtTp202mAYLhrWWtjuPAwpY5m6xuTO6Xm1mPZePxMi+ni+C/RTwnwXS6ZNUE1mrVRvZ1PkeceW8qo9fmcnAHTpPoDYyqoAVEHCr0AHoFHErcBHuvcZdc1pnsuc4EzeaxOSyKT6/E34TMknhvlz5c/5XWs2P2Ln7q/5kGewD7Nh/FRIhLWH2rm+6oA/pKrKrB1q1LZOONxHP3ZWGXUnUWkKlRLHIUNdjJ/5VM26GyynytHqGU2mo2KFLMu0EAqC3OBnqf/AB0Jp9EhsZS9zla1RWy9ljfZqr3evc+xJ4E5YDpdPqtVZsfUitrrGztQCsFtoZuiKM/zPUylbGBwcfar+Jfcekju/asvG2ysMMA844OZ3eD5bjkMPzBGRO1aa6xqnxtVQ65bIOCewlRANnyG7kMh9T+sTVVpc4a3OPiwnsT+9LqdNXUB+838TAcfIS+XGbXAAAABgDgAdAJ2IlZIiICIiAiIgIiIELUFiMp7jg+hHSZKbTSzI+Qufi/2n1m6U20Lbz0cDg+vsYWLCqWKQcMrD8x7TFZo7QT5ZVh23HB/xOf+6o9dufvJJjWWDqqH8SJKs2eFB8PsOWssVVAJOwFmwOeCcCVAeWE24wWAYsQMD1Ynjian1drAqFTkEfvMeflMlihkdLVYV2IysGBGAeN2CMyeGpb7StSvVUjZYuCQwdTlWAPYiUqq6bkadi2PtKu4n/mlGm36T9hZnygT5dgOQAf7TcXtxlNr8dQSD/IGTVUfW9QT8NO0ZwDYSBn06S6zUeRU995VEQDcRnJJOAqjqSegHedUNy9uN/RVHRR/n9fODVJZbXZcQ7V5+r1DojEcsF7t79unzd07JrYlqU2W1tWxGVFoUvWWGMZUnnseZTq9J9bQUee1dTsPOUIG8xcjCMSQdvqP/B9OjTnIssHI+wvUL7n3/XyvNdbEMUUsDkEgZlxncU06SuoJvPmOvRiMAfITTETTJERAREQEREBERAREQEREBERAThVD+6v5CdiBwADoAPlIutbKd4BHXJ7e+ZP1mS23ecKfgH/UfWQYrNMORWc1luUsGcL3IklVKVWuobVOSQe2ec8y/wBYVFssRSD/ABNj0HrI3qoabU37WDrWnOSQS2R/COk20aWmgDblnAYeZYdz/EQSM+kvAA4HQdIlxm3SIiVCIiAiIgIiICIiAiIgIiICIiAiIgIiUX27BtU/Gf5D1gRus6op+8f7f5mfPP8AWP0ZwkKpJ6Dkw0hqLjRTbatT3OqnyqaiA91h4WtS3Aye5PHXtKtDrmrZhqymbbNvmorIEsA5pdG5BX0Pz5zxgfxRh4hXtqsOm05s3ZQj6wV+FnpJ6pWeCQOSD2XJ9e7TabXp9Z0zJ5joFJYZruUciu9Rz8j1Hb3xu+Gszy9EEHBBBBGQQes7MHh1WrqSxLgyoCPKSx1sZfUb16j0m+alYswiIlQiIgIiICIiAiIgIiICIiAiIgIiICebZvrdvMPxEk7j0PuJ6U4VDAggEEEHODxCx5u5QMlgABkkkYA7kmeBfqtdqbhrq2P1PSO4XR4dSK8YOo1NfDHcOQR9kEcckn6kaOneGOSg6Icbfx9pDV6GvU4sRjTqkx5V6faGOdrjuJmy1qWe2emzw3xfTIoG01hWVUIFlDDgPU68Y9COPX0mXS6XxPRa1a0UtS7g2OigUOmeWxn4WHcdOeOuJ59un1ek1BfToKdWuXOnrKpVqB3fSsfhBPdTwfY9fpNBqLNVpq7XTaxLKwHQlTjImZ3q2dPjw1RETo5kREBERAREQEREBERAREQEREBERAREQEREBERAqu0+n1ChL6ksUHcA4zg+ok0RK1VEUKijCqoAAHoAJKICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiB//Z",
        image2URL: "data:image/jpeg;base64,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",
        type: "Electronics",
        shop:"shop3",
        description: "Multi-plug extension board with surge protection for home and office use.",
        size: "6 outlets",
        price: "Rs.500",
        deletedPrice: "Rs.600",
        available: 30,
        sold: 15,
        rating: 4.2,
        offer: 'sale'
      },
      {
        name: "party wear",
        imageURL: "/assets/images/products/party-wear-1.jpg",
        image2URL: "/assets/images/products/party-wear-2.jpg",
        type: "footwear",
        shop:"shop3",
        description: "Multi-plug extension board with surge protection for home and office use.",
        size: "13",
        price: "Rs.5000",
        deletedPrice: "Rs.6000",
        available: 30,
        sold: 15,
        rating: 4,
        offer: 'new'
      },
      {
        name: "shoes-3",
        imageURL: "/assets/images/products/shoe-1_1.jpg",
        image2URL: "/assets/images/products/shoe-1.jpg",
        type: "footwear",
        shop:"shop3",
        description: "Multi-plug extension board with surge protection for home and office use.",
        size: "13",
        price: "Rs.3000",
        deletedPrice: "Rs.5000",
        available: 30,
        sold: 15,
        rating: 5,
        offer: 'sale'
      },
      {
        name: "shoes-2",
        imageURL: "/assets/images/products/shoe-2_1.jpg",
        image2URL: "/assets/images/products/shoe-2.jpg",
        type: "footwear",
        shop:"shop3",
        description: "Multi-plug extension board with surge protection for home and office use.",
        size: "13",
        price: "Rs.5000",
        deletedPrice: "Rs.6000",
        available: 30,
        sold: 15,
        rating: 3,
        offer: '20%'
      },
      {
        name: "shoes-1",
        imageURL: "/assets/images/products/shoe-4.jpg",
        image2URL: "/assets/images/products/shoe-5.jpg",
        type: "footwear",
        shop:"shop3",
        description: "Multi-plug extension board with surge protection for home and office use.",
        size: "13",
        price: "Rs.2500",
        deletedPrice: "Rs.3000",
        available: 30,
        sold: 15,
        rating: 4,
        offer: 'new'
      },
       {
        name: "top",
        imageURL: "/assets/images/products/clothes-1.jpg",
        image2URL: "/assets/images/products/clothes-2.jpg",
        type: "Clothing",
        shop: "shop2",
        description: "Comfortable and breathable tops for women.",
        size: "Large",
        price: "Rs.250",
        deletedPrice: "Rs.300",
        available: 40,
        sold: 20,
        rating: 5,
        offer: "new"
    },
    {
      name: "shorts",
      imageURL: "/assets/images/products/shorts-1.jpg",
      image2URL: "/assets/images/products/shorts-2.jpg",
      type: "Clothing",
      shop:"shop3",
      description: "Multi-plug extension board with surge protection for home and office use.",
      size: "Midium",
      price: "Rs.1000",
      deletedPrice: "Rs.1600",
      available: 30,
      sold: 15,
      rating: 5,
      offer: 'sale'
    },
    {
      name: "treshme shampoo",
      imageURL: "/assets/images/products/shampoo.jpg",
      image2URL: "/assets/images/products/shampoo.jpg",
      type: "Bodycare",
      shop: "garg",
      description: "Nourishing hair conditioner for smooth and manageable hair.",
      size: "200ml",
      price: "Rs.300",
      deletedPrice: "Rs.400",
      available: 60,
      sold: 40,
      rating: 5,
      offer:"sale"
    },
    {
      name: "jacket",
      imageURL: "/assets/images/products/jacket-3.jpg",
      image2URL: "/assets/images/products/jacket-4.jpg",
      type: "Clothing",
      shop: "shop2",
      description: "Comfortable and breathable jackets for men.",
      size: "Large",
      price: "Rs.2250",
      deletedPrice: "Rs.3000",
      available: 40,
      sold: 20,
      rating: 4,
      offer: "22%"
  },
]

