import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="first-question">
                <h2> 1.  Difference between Authorization and Authentication</h2>
                <p> Authentication and authorization are frequently used interchangeably, they're separate processes used to cover an association from cyber-attacks. As data breaches continue to escalate in both frequency and compass, authentication and authorization are the first line of defense to help nonpublic data from falling into the wrong hands. As a result, strong authentication and authorization styles should be a critical part of every association’s overall security strategy.</p>
                <h5> Authentication vs. Authorization</h5>
                <p>Authentication verifies who the user is, whereas authorization determines what resources a user can access. Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user, and authorization works through settings that are implemented and maintained by the organization. Authentication is the first step of a good identity and access management process. But authorization always takes place after authentication. Authentication is visible to and partially changeable by the user, where Authorization isn’t visible to or changeable by the user.</p>
            </div>
        </div>
    );
};

export default Blog;