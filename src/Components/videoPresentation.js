import React from 'react';
import ReactPlayer from 'react-player'


function VideoPlayer() {
    return (
        <section class="py-5 bg-dark section-angle top-left bottom-left">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 mx-auto text-center justify-content-center">
                        <h1>Presentacion del proyecto</h1>
                        <p>Demostracion en vivo del funcionamiento de la aplicacion</p>
                        <div className="d-flex justify-content-center">
                        <ReactPlayer url='https://www.youtube.com/watch?v=54DD6wxTPH8' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}
export default VideoPlayer;
