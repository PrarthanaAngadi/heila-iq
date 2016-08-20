var Session = {

    lastAccessed: {
        id: "",
        created_at: ""
    },

    user: {
        firstName: "",
        lastName: "",
        email: "",
        dob: "",
        active: ""
    },

    invalidate: function () {
        this.user = {
            firstName: "",
            lastName: "",
            email: "",
            dob: "",
        }
    },

    set: function(user) {
        this.user = user;
    },

    get: function() {
        return this.user;
    }
};

