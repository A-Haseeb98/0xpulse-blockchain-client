import "./style.css"
import img from "../../../Image/Font/sss.svg"

function Cover() {
    return (
        <div className="cover_wrapper">

            <div className="Cover_container_new">
                <div className="cover_content_new">
                    <h1><span>0x</span>Pulse</h1>
                    <span className="content">est modulumina'e consensit</span>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia<span className="green">†</span></p>
                </div>
                <div className="image_container_cover">
                    <img src={img} alt="" />
                </div>
                <div className="bottom_text_p">
                    <p>0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e<span className="green">6</span>9aec8c0db1cb8fa3</p>
                </div>
            </div>
        </div>

    )
}

export default Cover;