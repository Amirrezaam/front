import React from 'react'

export default function Accordion({id}) {
    return (
        <div className="card">
            <div className="card-header" id={`heading-${id}`}>
                <button data-toggle="collapse" data-target={`#collapse-${id}`} aria-expanded="true" aria-controls={`collapse-${id}`}>
                    لورم ایپسوم متن ساختگی با تولید سادگی؟
                </button>
            </div>

            <div id={`collapse-${id}`} className="collapse show" aria-labelledby={`heading-${id}`} data-parent="#accordion">
                <div className="card-body">
                    <p> شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد</p>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است</p>
                    <p>در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی</p>
                </div>
            </div>
        </div>
    )
}
