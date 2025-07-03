
import './EventPlanner.css'; // Import CSS file for styling

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>
            <section className='description'>
                <p>
                    Plan and organize your event effortlessly with Event Planner. From
                    birthdays to corporate meetings, we've got you covered.
                </p>
                <button className='get-started-button'>Get Started</button>
            </section>
            <section className='events_categories'>
                <ul>
                    <h2>Social Events:</h2>
                    <li>Birthday parties</li>
                    <li>Anniversary celebrations</li>
                    <li>Wedding receptions</li>
                    <li>Baby showers</li>
                    <li>Graduation parties</li>
                    <li>Family reunions</li>
                </ul>
                <ul>
                    <h2>Entertainmnet Events:</h2>
                    <li>Concerts</li>
                    <li>Music festivals</li>
                    <li>Film screenings</li>
                    <li>Comedy shows</li>
                    <li>Art exhibitions</li>
                    <li>Cultural events</li>
                </ul>
                <ul>
                    <h2>Community Events:</h2>
                    <li>Fundaraising events</li>
                    <li>Charity galas</li>
                    <li>Volunteer drives</li>
                    <li>Neighborhood block parties</li>
                    <li>Community festivals</li>
                    <li>Cultural celebration</li>
                </ul>
            </section>
            <section className='features'>
                <h2>Features</h2>
                <ul>
                    <li>Easy event creation and management</li>
                    <li>Customizable event templates</li>
                    <li>Guest list management</li>
                    <li>Real-time collaboration</li>
                    <li>Reminders and notifications</li>
                </ul>
            </section>
            <section className='testimonials'>
                <h2>Testimonials</h2>
                <div className='testimonial'>
                    <p>"Event Planner made organizing my wedding a breeze. Higly recommended!"</p>
                <p className='author'>- Emily Johnson</p>
                </div>
                <div className='testimonial'>
                    <p>"I use Event Planner for all my corporate events. It saves me so much time and effort!"</p>
                <p className='author'>- Jogn Smith</p>
                </div>
            </section>
            <section className='contact'>
                <h2>Contact Us</h2>

                <form>
                    <input type='text' placeholder='Name' />
                    <input type='email' placeholder='Email' />
                    <input type='message' placeholder='Message' />
                    <button className='submit-button'>Send</button>
                </form>
            </section>
        </div>
    );
};

export default EventPlanner;
