import React from 'react'
import telegram from '../../../../public/Image 1.png'
const LastNews = () => {
    return (
        <section className=" bg-gray-50">
            <div className="container mx-auto px-96">
                <img src={telegram} className='object-fill'></img>
                <h2 className="font-bold text-center pt-28 text-blue-400 text-4xl">آخرین اخبار</h2>
                <div className="bg-white p-6 rounded-lg shadow-md py-20">
                    <h3 className="font-bold mb-2 text-2xl text-blue-400">سر تیتر خبر</h3>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit maxime obcaecati vitae voluptate voluptatem, consectetur deleniti minima, alias ipsam incidunt similique veniam quos rerum inventore veritatis cumque officia dignissimos aspernatur!
                    </p>
                </div>
                <div className='float-left pl-8'>مشاهده همه اخبار</div>
            </div>
        </section>
    )
}

export default LastNews