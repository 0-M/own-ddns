
this_dir=`basedir $0`


service_name=own-ddns
service_file="$service_name.service"

working_dir="/opt/$service_name"



# make working dir
mkdir $working_dir
cp -r "$this_dir/src" "$working_dir"

# install service script
mv "$working_dir/src/service/$service_file" "/etc/systemd/system/$service_file"

if [[ `systemctl` =~ -\.mount ]]; then 
    systemctl start $service_name
fi
