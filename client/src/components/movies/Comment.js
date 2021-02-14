import React from 'react';

function Comment({comments, onComment, clickHandler}) {
    return (
        <>
            {/* comments and reviews */}
            <div className="comments">
                {/* tabs nav */}
                <ul className="nav nav-tabs comments__title comments__title--tabs" id="comments__tabs" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">
                        <h4>Comments</h4>
                        <span>{comments?.length}</span>
                        </a>
                    </li>
                </ul>
                {/* end tabs nav */}
                {/* tabs */}
                <div className="tab-content">
                {/* comments */}
                <div className="tab-pane fade show active" id="tab-1" role="tabpanel">
                    <ul className="comments__list">
                        {
                            comments?.map((comment,key) => (
                                <React.Fragment key={key}>
                                    <li className="comments__item">
                                        <div className="comments__autor">
                                            <img className="comments__avatar" src="/assets/img/arrow2.svg" alt="avatar"/>
                                            <span className="comments__name">{comment.author}</span>
                                            <span className="comments__time">{comment.post}</span>
                                        </div>
                                        <p className="comments__text">
                                            {comment.comment}
                                        </p>
                                    </li>
                                </React.Fragment>
                            ))
                        }
                    </ul>
                    <form action="#" className="comments__form">
                        <div className="sign__group">
                            <textarea onChange={e =>{
                                onComment(e.target.value)
                            }} id="text" name="text" className="sign__textarea" placeholder="Add comment" defaultValue={""} />
                        </div>
                        <button onClick={clickHandler} type="button" className="sign__btn">Send</button>
                    </form>
                </div>
                {/* end comments */}
                </div>
                {/* end tabs */}		
            </div>
            {/* end comments and reviews */}
        </>
    );
}

export default Comment;