import React from 'react'

export function MessagePage(props) {
    

    return (
        <div className="message__wrapper  d-flex ">
                <div className="all__message shadow bg-white col-sm-3  col-2">
                    <div className="messages-container ">
                        
                    <div className="d-flex message-item shadow-sm pt-3 pb-2 px-3 mb-1 bg-white ">
                            <img className="mr-2" src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.6435-9/117896725_297609081544905_8435732822907395871_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=4f4nBbz7AQkAX8EHV2y&_nc_ht=scontent.fsgn5-5.fna&oh=ecd2f62fb711a0c7f3621e6d5935b8ca&oe=60A7FC2B" alt />
                              <div className="message-info">
                            <p className="mb-0 message_name">Nguyễn Khải Đăng</p>
                            <p className="message-ib">đâsdasdsadadasđ</p>
                        </div>
                       </div>
                     <div className="d-flex message-item shadow-sm  pt-3 pb-1 px-3 mb-1 bg-white ">
                            <img className="mr-2" src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.6435-9/162082031_2880103468926566_4374364692726017034_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=PuUZo0D6qNsAX9g2TOc&_nc_ht=scontent.fsgn5-2.fna&oh=aac54b010eb72a45dc821685b6674a20&oe=60A57B6C" alt />
                              <div  className="message-info">
                            <p className="mb-0 message_name">Vưu Hoàng Phạm Tấn</p>
                            <p className="message-ib">đâsdasdsadadasđ</p>
                        </div>
                       </div>
                       <div className="d-flex message-item shadow-sm  pt-3 pb-1 px-3 mb-1 bg-white ">
                            <img className="mr-2" src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.6435-1/s320x320/82301915_196717288169090_8112511013833670656_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=7206a8&_nc_ohc=CeMrDk0_ae8AX-gBZwh&_nc_ht=scontent.fsgn5-5.fna&tp=7&oh=1ea83ab1b793057640f438a4c3319a9e&oe=60A7C434" alt />
                              <div  className="message-info">
                            <p className="mb-0 message_name">Dương Tuấn Bảo</p>
                            <p className="message-ib">đâsdasdsadadasđ</p>
                        </div>
                       </div>
                    </div>

                </div>
                <div className="currend__message  col-sm-9 col-10 ">
                        <div className="user_name shadow-none bg-light py-4 pl-4">
                             <img className="mr-3" src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.6435-9/117896725_297609081544905_8435732822907395871_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=4f4nBbz7AQkAX8EHV2y&_nc_ht=scontent.fsgn5-5.fna&oh=ecd2f62fb711a0c7f3621e6d5935b8ca&oe=60A7FC2B" alt />
                          <span style={{color:"#6e86c8"}}>Nguyễn Khải Đăng</span>  
                        </div>
                        <div className="type-text shadow-sm">
                            <span> <input placeholder=""       
                                 type="text"/></span><button className="btn btn-primary button-send" style={{borderRadius:"40px"}}>Send</button>
                               
                                
                            
                           
                            
                        </div>
                </div>
        </div>
    )
}
