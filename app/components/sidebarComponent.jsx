'use strict'

import React from 'react'

export default () => {
    return (
        <div className="sidebar-container">
            <div id="wrapper">
                <div id="sidebar-wrapper">
                    <ul className="sidebar-nav">
                        <li className="sidebar-brand"><a href="#">Home</a></li>
                        <li><a href="#">Another link</a></li>
                        <li><a href="#">Next link</a></li>
                        <li><a href="#">Last link</a></li>
                    </ul>
                </div>
                <div id="page-content-wrapper">
                    <div className="page-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}