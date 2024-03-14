import './community.css';

const Community = () => {
    return (
        <section className='community'>
            <h3>Join shopping community to get monthly promo</h3>
            <p>Type your email down below and be young wild generation</p>
            <form action="">
                <div className="community__form">
                    <input type="text" placeholder='Add your email here'/>
                    <button type="button">Send</button>
                </div>
            </form>
        </section>
    );
}

export default Community;