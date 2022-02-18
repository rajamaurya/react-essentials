export default String.prototype.equalIgnoreCase =function(str){
        return this.toUpperCase() == str.toUpperCase();
}