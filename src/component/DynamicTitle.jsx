import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function DynamicTitle() {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      '/': 'Home - CritiqueMaster',
      '/register': 'Register - CritiqueMaster',
      '/services': 'Services - CritiqueMaster',
      '/login': 'Login - CritiqueMaster',
      '/add-service': 'Add Service - CritiqueMaster',
      '/my-services': 'My Services - CritiqueMaster',
      '/reviews': 'Reviews - CritiqueMaster',
    };

    // Handle dynamic routes like /details/:id and /update/:id
    if (location.pathname.startsWith('/details/')) {
      document.title = 'Service Details - CritiqueMaster'; // Title for /details/:id
    } else if (location.pathname.startsWith('/update/')) {
      document.title = 'Update Service - CritiqueMaster'; // Title for /update/:id
    } else {
      // Set title for other static routes
      document.title = titles[location.pathname] || 'CritiqueMaster'; // Fallback title
    }
  }, [location]);

  return null;
}

export default DynamicTitle;
