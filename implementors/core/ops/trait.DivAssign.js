(function() {var implementors = {};
implementors['libc'] = [];implementors['openssl'] = [];implementors['hyper'] = [];implementors['nickel'] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()