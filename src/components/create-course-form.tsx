export const CreateCourseForm = ()=>{

    return <form>
    <div className="form-group">
      <label htmlFor="name">First name</label>
      <input type="first name" className="form-control" id="First name" placeholder="Enter first name"/>
    </div>
    <div className="form-group">
      <label htmlFor="name">Name</label>
      <input type="name" className="form-control" id="Name" placeholder="Enter name"/>
    </div>
    <div className="form-group">
      <label htmlFor="gender">Gender</label>
      <input type="gender" className="form-control" id="gender" placeholder="gender"/>
    </div>
    <div className="form-group">
      <label htmlFor="date of birth">Date of birth</label>
      <input type="date of birth" className="form-control" id="date of birth" placeholder="date of birth"/>
    </div>
    <div className="form-group">
      <label htmlFor="field of activity">Field of activity</label>
      <input type="field of activity" className="form-control" id="field activity" placeholder="field activity"/>
    </div>
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input type="password" className="form-control" id="password" placeholder="password"/>
    </div>
    <div className="form-group">
      <label htmlFor="confirm password">Confirm password</label>
      <input type="confirm password" className="form-control" id="confirm password" placeholder="confirm password"/>
    </div>
    <button type="submit" className="btn btn-primary btn-block">Creer le cours</button>
  </form>
}