

 function CardComponent() {
    const posts = [
        {
            title: "React website",
            img: "data:image/jpeg;base64,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",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lectus tortor, dignissim sit amet, ultricies sed"
        },
        {
            title: "Hair Dressing",
            img: "https://mlnf6rdzbkm2.i.optimole.com/w:1253/h:836/q:mauto/f:avif/https://www.formhealth.co/blog/wp-content/uploads/2023/09/iStock-1491677452.jpg",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lectus tortor, dignissim sit amet, ultricies sed"
        },
        {
            title: "Laptop Fixing",
            img: "https://mlnf6rdzbkm2.i.optimole.com/w:1253/h:836/q:mauto/f:avif/https://www.formhealth.co/blog/wp-content/uploads/2023/09/iStock-1491677452.jpg",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lectus tortor, dignissim sit amet, ultricies sed"
        },
        {
            title: " Cloth branding",
            img: "https://mlnf6rdzbkm2.i.optimole.com/w:1253/h:836/q:mauto/f:avif/https://www.formhealth.co/blog/wp-content/uploads/2023/09/iStock-1491677452.jpg",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lectus tortor, dignissim sit amet, ultricies sed"
        },
        {
            title: "Phone Fixing",
            img: "https://mlnf6rdzbkm2.i.optimole.com/w:1253/h:836/q:mauto/f:avif/https://www.formhealth.co/blog/wp-content/uploads/2023/09/iStock-1491677452.jpg",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lectus tortor, dignissim sit amet, ultricies sed"
        },
        {
            title: "Game Testing",
            img: "https://mlnf6rdzbkm2.i.optimole.com/w:1253/h:836/q:mauto/f:avif/https://www.formhealth.co/blog/wp-content/uploads/2023/09/iStock-1491677452.jpg",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lectus tortor, dignissim sit amet, ultricies sed"
        },
        {
            title: "Wakye selling",
            img: "https://mlnf6rdzbkm2.i.optimole.com/w:1253/h:836/q:mauto/f:avif/https://www.formhealth.co/blog/wp-content/uploads/2023/09/iStock-1491677452.jpg",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lectus tortor, dignissim sit amet, ultricies sed"
        },
        {
            title: "Shop Attendant",
            img: "https://mlnf6rdzbkm2.i.optimole.com/w:1253/h:836/q:mauto/f:avif/https://www.formhealth.co/blog/wp-content/uploads/2023/09/iStock-1491677452.jpg",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lectus tortor, dignissim sit amet, ultricies sed"
        },
    ];
    return (
        <>
            <div className="grid gap-2 lg:grid-cols-4">
                {posts.map((items, key) => (
                    <div className="w-full rounded-lg shadow-md lg:max-w-sm font-quicksand" key={key}>
                        <img
                            className="object-cover w-full h-48"
                            src={items.img}
                            alt="image"
                        />
                        <div className="p-4">
                            <h4 className="text-xl font-semibold text-blue-600 font-quicksand">
                                
                                {items.title}
                            </h4>
                            <p className="mb-2 leading-normal">
                            {items.content}
                            </p>
                            <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow font-quicksand">
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