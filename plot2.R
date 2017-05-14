##Read in data
pm25_sum <- readRDS("summarySCC_PM25.rds")
pm25_srccls <- readRDS("Source_Classification_Code.rds")

##Baltimore subset
balt_sub <- subset(pm25_sum, fips == "24510")

##total up emmissions by year
balt_yearly <- aggregate(Emissions ~ year, balt_sub, sum)

##plot Baltimore emission trends between 1999-2008
plot(balt_yearly$year, balt_yearly$Emissions, xlab = "year", ylab = "PM2.5 Emissions", main = "PM2.5 Emissions Between 1999-2008, Baltimore, MD", type = "l")