// .parent {
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     grid-template-rows: repeat(5, 1fr);
//     grid-column-gap: 0px;
//     grid-row-gap: 0px;
//     }
//                        grid-row-start | grid-column-start | grid-row-end | grid-column-end//                        
//                        row-span-X     | grid-column-start | grid-row-end | grid-column-end
//     .div1 { grid-area:       1                 1                 6                 2; }
//     .div2 { grid-area:       1                 2                 2                 3; }
//     .div3 { grid-area:       2                 2                 3                 3; }
//     .div4 { grid-area:       3                 2                 4                 3; }
//     .div5 { grid-area:       4                 2                 5                 3; }
//     .div6 { grid-area:       5                 2                 6                 3; }
//     .div7 { grid-area:       1                 3                 6                 4; }
// If four <grid-line> values are specified, grid-row-start is set to the first value, grid-column-start is set to the second value, grid-row-end is set to the third value, and grid-column-end is set to the fourth value.

export default function EventCard({/*props*/}) {

    

    return (

        // grid parent
        <div className="grid grid-cols-3 grid-rows-5 gap-4 bg-purple-50 h-60"> 
            <div className="row-start-1 col-start-1 row-end-6 col-end-2 bg-pink-500">Date</div>
            <div className="row-start-1 col-start-2 row-end-2 col-end-3 bg-green-500">Long date</div>
            <div className="row-start-2 col-start-2 row-end-3 col-end-3 bg-blue-500">Title</div>
            <div className="row-start-3 col-start-2 row-end-4 col-end-3 bg-yellow-500">Location</div>
            <div className="row-start-4 col-start-2 row-end-5 col-end-3 bg-red-500">Description</div>
            <div className="row-start-5 col-start-2 row-end-6 col-end-3 bg-gray-500">Read More link</div>
            <div className="row-start-1 col-start-3 row-end-6 col-end-4 bg-pink-500">Image</div>

        </div>
    )


};