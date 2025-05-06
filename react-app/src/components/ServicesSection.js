import React from 'react';
const services = [
    {
        title: 'Full-Service Pool Cleaning',
        description: 'Keep your pool sparkling and swim-ready all year long with our comprehensive cleaning service, including skimming, brushing, vacuuming, and filter maintenance.',
        image: 'https://res.cloudinary.com/duz4vhtcn/video/upload/c_crop,h_1638,w_992/v1746491477/vidu-video-2763226135542961_rbj0tt.mp4',
        poster: 'https://res.cloudinary.com/duz4vhtcn/image/upload/c_crop,h_4924,w_2451/v1746492595/sandy3_hl1pcu.jpg',
        type: 'video',
        gradient: ' linear-gradient(90deg, #000000,#cb6ce6, #5ce1e6)'
    },
    {
        title: 'Green to Clean Recovery',
        description: 'Is your pool looking more like a pond? Our green-to-clean service will restore your water clarity and balance, transforming your pool from murky to magnificent in just days.',
        image: 'https://res.cloudinary.com/duz4vhtcn/video/upload/v1746492850/vidu-video-2763222859741367_w8c01q.mp4',
        poster: 'https://res.cloudinary.com/duz4vhtcn/image/upload/v1746492216/sandy2_nvqcrc.jpg',
        type: 'video',
        gradient: 'slinear-gradient(90deg, #000000,#cb6ce6, #5ce1e6)'
    },
    {
        title: 'Weekly Maintenance Plans',
        description: 'Enjoy a stress-free pool experience with our weekly maintenance plans. We handle chemical balancing, debris removal, and equipment checks, so you can just dive in.',
        image: 'https://res.cloudinary.com/duz4vhtcn/video/upload/c_crop,h_1187,w_963/v1746490843/vidu-video-2763219046132686_utz67d.mp4',
        poster: 'https://res.cloudinary.com/duz4vhtcn/image/upload/c_scale,h_4284,w_3274/v1746494500/sandy5_ysw1yh.jpg',
        type: 'video',
        gradient: 'linear-gradient(90deg, #000000,#cb6ce6, #5ce1e6)'
    },
    {
        title: 'Pool Equipment Inspections',
        description: 'Avoid unexpected breakdowns with our thorough equipment inspections. We evaluate pumps, filters, heaters, and more — keeping your system running at peak performance.',
        image: 'https://res.cloudinary.com/duz4vhtcn/video/upload/c_crop,h_806,w_617/v1745876829/5thfinalvideo_hagsg9.mp4',
        poster: 'https://res.cloudinary.com/duz4vhtcn/image/upload//c_scale,h_4284,w_3274/v1745884630/060BC3A2-AC59-48C1-8639-0CF1CFEA15B5_augwxi.jpg',
        type: 'video',
        gradient: ' linear-gradient(90deg, #000000,#cb6ce6, #5ce1e6)'
    },
];


const ServicesSection = () => {
    return (
        <section style={{ backgroundColor: 'white' }} id="services" data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="section-title">
                            <h2>Our Pool Services</h2>
                            <span className="line-bar">...</span>
                        </div>
                    </div>

                    {services.map((s, i) => (
                        <div className="col-md-6 col-sm-6" key={i}>
                            <div className="media blog-thumb">
                                <div className="media-object media-left">
                                    <a href="blog-detail.html" onClick={(e) => e.preventDefault()}>
                                        {s.type === 'video' ? (
                                            <video
                                                src={s.image}
                                                poster={s.poster} // <-- ADD THIS
                                                className="img-responsive"
                                                controls
                                                muted
                                                playsInline
                                                style={{ width: '100%', height: 'auto', borderRadius: '5px', cursor: 'pointer' }}
                                            />

                                        ) : (
                                            <img
                                                src={s.image}
                                                className="img-responsive"
                                                alt={s.title}
                                            />
                                        )}
                                    </a>
                                </div>
                                <div className="media-body blog-info" style={{ background: s.gradient }}>
                                    <h3><a href="blog-detail.html">{s.title}</a></h3>
                                    <p style={{ color: 'white' }}>{s.description}</p>
                                    <a style={{ visibility: 'hidden' }} href="blog-detail.html" className="btn section-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
