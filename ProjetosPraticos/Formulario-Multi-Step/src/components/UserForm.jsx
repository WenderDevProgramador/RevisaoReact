
const UserForm = ({data, updateHandler}) => {
    return (
        <div>
            <div className="form-control">
                <label htmlFor="name">Name:</label>
                <input type="text"
                    id="name" name="name"
                    placeholder="Enter your name"
                    value={data.name || ''}
                    onChange={(e) => updateHandler('name', e.target.value)}
                    required />
            </div>

            <div className="form-control">
                <label htmlFor="email">Email:</label>
                <input type="email"
                    id="email" name="email"
                    placeholder="Enter your email"
                    value={data.email || ''}
                    onChange={(e) => updateHandler('email', e.target.value)}
                    required />
            </div>
        </div>
    )
}

export default UserForm