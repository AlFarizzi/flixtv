import React from 'react';

function Comment({comments}) {
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
                                <>
                                    <li className="comments__item">
                                        <div className="comments__autor">
                                            <img className="comments__avatar" src="/assets/img/arrow2.svg" alt="avatar"/>
                                            <span className="comments__name">Brian Cranston</span>
                                            <span className="comments__time">30.08.2021, 17:53</span>
                                        </div>
                                        <p className="comments__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                    </li>
                                </>
                            ))
                        }
                    </ul>
                    <form action="#" className="comments__form">
                        <div className="sign__group">
                            <textarea id="text" name="text" className="sign__textarea" placeholder="Add comment" defaultValue={""} />
                        </div>
                        <button type="button" className="sign__btn">Send</button>
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