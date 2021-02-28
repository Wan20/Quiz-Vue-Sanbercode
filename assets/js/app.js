Vue.component('user-template', {
    props: ['user', 'index'],
    template: `
        <li>
            {{ user.name }}
            <button @click="editMethod(user.name, index)">Edit</button>
            <button @click="deleteMethod(index)">Delete</button>
            <br>
        </li>
    `,
    methods: {
        editMethod(value, index) {
            console.log(value, index);
            this.$emit('edited', value, index)
        },
        deleteMethod(index) {
            var z = confirm("Anda Yakin?")
            if (z == true) {
                this.$emit('deleted', index)
            }
        }
    }
});

var vm = new Vue({
    el: '#app',
    data: {
        name: '',
        users: [
            { name: 'Muhammad Iqbal Mubarok' },
            { name: 'Ruby Purwanti' },
            { name: 'Faqih Muhammad' }            
        ],
        show: false,
        tempIndex: 0,
        styleUl: 'list-style-type: none;'
    },
    methods: {
        addUser() {
            this.users.push(
                {
                    name: this.name
                }
            );
            this.name = '';
            this.show = false
        },
        updateUser() {
            this.users[this.tempIndex].name = this.name
            this.name = '';
            this.show = false
        },
        editedUser(valueName, index) {
            this.name = valueName
            this.tempIndex = index
            this.show = true
        },
        deletedUser(index) {
            this.users.splice(index, 1);
            this.show = false
            this.name = '';
        }
    }
})