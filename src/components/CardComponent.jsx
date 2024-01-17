import React from "react";

 function CardComponent() {
    const posts = [
        {
            title: "React hookup website",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lectus tortor, dignissim sit amet, ultricies sed"
        },
        {
            title: "Hair Dressing",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lectus tortor, dignissim sit amet, ultricies sed"
        },
        {
            title: "Laptop Fixing",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lectus tortor, dignissim sit amet, ultricies sed"
        },
        {
            title: " Cloth branding",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lectus tortor, dignissim sit amet, ultricies sed"
        },
        {
            title: "Phone Fixing",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lectus tortor, dignissim sit amet, ultricies sed"
        },
        {
            title: "Game Testing",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lectus tortor, dignissim sit amet, ultricies sed"
        },
        {
            title: "Wakye selling",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lectus tortor, dignissim sit amet, ultricies sed"
        },
        {
            title: "Shop Attendant",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lectus tortor, dignissim sit amet, ultricies sed"
        },
    ];
    return (
        <>
            <div className="grid gap-2 lg:grid-cols-4">
                {posts.map((items, key) => (
                    <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={key}>
                        <img
                            className="object-cover w-full h-48"
                            src={items.img}
                            alt="image"
                        />
                        <div className="p-4">
                            <h4 className="text-xl font-semibold text-blue-600">
                                
                                {items.title}
                            </h4>
                            <p className="mb-2 leading-normal">
                            {items.content}
                            </p>
                            <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow ">
                                Apply
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
export default CardComponent;