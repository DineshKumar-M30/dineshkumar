import React, { useEffect } from 'react';
import ContactBanner from '../components/ContactBanner';
import ContactContent from '../components/ContactContent';
import ContactLocationForm from '../components/ContactLocationForm';
import SubscribeSection from '../components/SubscribeSection';

const ContactPage = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <ContactBanner />
            <ContactContent />
            <ContactLocationForm />
            <SubscribeSection />
        </>
    );
};

export default ContactPage;
