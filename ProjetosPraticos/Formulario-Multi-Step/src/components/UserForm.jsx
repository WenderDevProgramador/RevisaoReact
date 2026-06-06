
const UserForm = () => {
    return (
        <div>
            <div className="form-control">
                <label htmlFor="name">Name:</label>
                <input type="text"
                    id="name" name="name"
                    placeholder="Enter your name"
                    required />
            </div>

            <div className="form-control">
                <label htmlFor="email">Email:</label>
                <input type="email"
                    id="email" name="email"
                    placeholder="Enter your email"
                    required />
            </div>
        </div>
    )
}

export default UserForm