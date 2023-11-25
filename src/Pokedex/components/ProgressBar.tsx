
export const ProgressBar = ({percent}:any) => {
    console.log(percent);

    let percentClass = percent < 30 ? "low" : percent > 30 && percent < 60 ? "medium" : "high";



    return (
        <div className="progressBar">
            <div className={`progress ${percentClass}` } style={{width:`${percent}%`}} ></div>
        </div>
    )
}
