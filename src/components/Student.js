function Student(){
    const student={
        ho_ten: 'Truong Duc Thang',
        ngay_sinh: '2-2-2002',
        dia_chi: 'Hai Duong',
        tot_nghiep: false,
        gioi_tinh: true,
        hoc_lai: [
          'COM108',
          'SOF304',
          'WEB207',
        ],
      }
    
      const list=student.hoc_lai
      .map(function (value,index){
        return <li key={index}> { value }</li>
      });
    
      const element= (
        <ul>
          <li>Ho Ten: { student.ho_ten }</li>
          <li>Ngay Sinh: { student.ngay_sinh }</li>
          <li>Dia Chi: { student.dia_chi }</li>
          <li>Tot Nghiep: { student.tot_nghiep+ "" }</li>
          <li>Gioi Tinh: { student.gioi_tinh===true ? 'Nam':'Nu' }</li>
          <li>Hoc lai
            <ul>
            { list } 
            </ul>
          </li>
        </ul>
      );
      return element;
}
export default Student;